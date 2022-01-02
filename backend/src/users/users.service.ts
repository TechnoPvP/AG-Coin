import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { hash, verify } from "argon2"
import { LoginUserDto } from './dto/login-user.dto';
import { Request, Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

@Injectable()
export class UsersService {
  constructor( private prisma: PrismaService ) {}

  async create(user: CreateUserDto) {
    const result = await this.prisma.user.create( { data: {
      ...user,
      password: await hash(user.password)
    }, } )
    return new UserEntity( result );
  }
  
  async login(user: LoginUserDto): Promise<UserEntity> {
    const result = await this.prisma.user.findFirst({
      where: { email: user.email }
    })

    if ( !result ) throw new ForbiddenException(`Wrong email or password`)

    if ( await verify(result.password, user.password) ) return new UserEntity( result )
    throw new ForbiddenException(`Wrong email or password`)
  }

  logout( request: Request, response: Response ) {
    request.session.destroy(console.log)
    response.clearCookie("connect.sid")
  }

  async update( id: number, user: UpdateUserDto ) {
    if ( user.password ) user.password = await hash( user.password )
    const result = await this.prisma.user.update( {
      where: { id },
      data: user
    } )

    return new UserEntity( result )
  }

  async delete ( id: number, req: Request, res: Response ) {
    const user = await this.prisma.user.delete( { where: { id } } )
    const store = (req as unknown)["sessionStore"] as PrismaSessionStore

    res.clearCookie( "connect.sid" )
    store.all( (err, all) => {
      if (!all) return
      Object.entries( all ).forEach( ([sessionID, value]) => {
        if ( value.user?.id === user.id ) store.destroy( sessionID )
      } )
    } )

    if ( req.session.user?.id === id ) req.session.destroy( console.error )
    return new UserEntity( user )
  }

}
