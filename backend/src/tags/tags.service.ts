import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
    constructor( private prisma: PrismaService ) {}

    async getAll() {
        return this.prisma.tag.findMany()
    }

    async create(name: string) {
        const tag = await this.prisma.tag.create({ data: { name } })
        return tag
    }

    async delete(name: string) {
        const tag = await this.prisma.tag.delete( { where: { name } } )
        return tag
    }

    async update( input: UpdateTagDto ) {
        const tag = await this.prisma.tag.update({
            where: { name: input.before },
            data: { name: input.after }
        })

        return tag
    }
}
