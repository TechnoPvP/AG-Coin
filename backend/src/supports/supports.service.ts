import { Support, Topics } from 'shared/prisma/generated/prisma-client-js';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupportEntity } from './entities/support.entity';
import { UpdateSupportDto } from './dto/update-support.dto';

@Injectable()
export class SupportsService {
    constructor (private prisma: PrismaService) {}

    async getAll() {
        const supports = await this.prisma.support.findMany()

        const response = new Map<Topics | "empty", Support[]>()
        supports.forEach( support => {
            if ( !support.topics.length ) {
                const arr = response.get( "empty" ) ?? []
                arr.push( support )
                response.set("empty", arr)

                return
            }

            support.topics.forEach( topic => {
                const arr = response.get( topic ) ?? []
                arr.push( support )
                response.set( topic, arr )
            } )
        } )

        return Object.fromEntries( response )
    }

    getOne(title: string, id: string) {
        return this.prisma.support.findFirst({
            where: {
                title: { equals: title, mode: "insensitive" },
                AND: { id }
            }
        })
    }

    create(support: SupportEntity) {
        return this.prisma.support.create({
            data: support
        })
    }

    async update(id: string, support: UpdateSupportDto) {
        const input = { ...support, topics: support.topics ? { set: support.topics } : undefined }
        return this.prisma.support.update({
            where: { id },
            data: input
        })
    }

    delete( id: string ) {
        return this.prisma.support.delete({
            where: { id }
        })
    }

}
