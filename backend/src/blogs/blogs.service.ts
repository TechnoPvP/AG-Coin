import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { v4 } from "uuid"

@Injectable()
export class BlogsService {
    constructor (private prisma: PrismaService) {}

    getAll() {
        return this.prisma.blog.findMany({ include: { tags: true } })
    }

    getOne( id: number ) {
        return this.prisma.blog.findFirst({
            where: { id },
            include: { tags: true }
        })
    }

    create ( blog: CreateBlogDto ) {
        return this.prisma.blog.create({
            data: {
                ...blog,
                thumbnail: blog.thumbnail ?? `https://avatars.dicebear.com/api/identicon/${v4()}.svg?size=500`,
                tags: {
                    connect: blog.tags ? blog.tags.map( tag => ({ ...tag }) ) : []
                }
            },
            include: { tags: true }
        })
    }

    update ( id: number, blog: UpdateBlogDto ) {
        const inputs = { ...blog, tags: blog.tags ? { set: blog.tags } : undefined }
        return this.prisma.blog.update({
            where: { id },
            data: inputs,
            include: { tags: true }
        })
    }

    delete ( id: number ) {
        return this.prisma.blog.delete({
            where: { id }
        })
    }
}