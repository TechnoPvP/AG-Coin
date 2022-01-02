import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor, Session, Req, Res, UseGuards, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { SessionData } from 'express-session';
import { UserEntity } from './entities/user.entity';
import { Request, Response } from 'express';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from 'src/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() user: CreateUserDto, @Session() session: SessionData) {
    const result = await this.usersService.create(user)
    session.user = result
    return result
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(":id")
  @Roles("SELF", "ADMIN")
  async update(@Param("id", ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    const result = await this.usersService.update( id, user )
    return result
  }

  @Roles("SELF", "ADMIN")
  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const result = await this.usersService.delete( id, req, res )
    return { ok: `User ${result.id} deleted.`}
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("login")
  async login(@Body() user: LoginUserDto, @Session() session: SessionData) {
    if ( session.user ) return session.user
    const result = await this.usersService.login(user)
    session.user = result
    return result
  }

  @UseGuards(IsLoggedInGuard)
  @Get("logout")
  logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    this.usersService.logout(request, response)
    return { ok: "User Logged out" }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(IsLoggedInGuard)
  @Get("me")
  me(@Session() session: SessionData) {
    // we have to rewrap this to get it sanitized?
    return new UserEntity( session.user )
  }

}
