import { Injectable } from '@nestjs/common';
import { SessionData } from 'express-session';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';

@Injectable()
export class FeedsService {
    constructor( private prisma: PrismaService ) {}

    getAll() {
        return this.prisma.feed.findMany({
            include: {
                user: true,
                comments: { include: { user: true } }
            }
        })
    }

    create(session: SessionData, feed: CreateFeedDto) {
        return this.prisma.feed.create({
            data: {
                ...feed,
                userId: session.user?.id
            },
            include: { 
                user: true,
                comments: { include: { user: true } } 
            }
        })
    }

    async update(session: SessionData, id: number, feed: UpdateFeedDto) {
        const where = { id, AND: { userId: session.user?.id } }
        await this.prisma.feed.updateMany({
            where,
            data: feed
        })

        return this.prisma.feed.findFirst( { where, include: { 
            user: true,
            comments: { include: { user: true } } 
        } } )
    }

    async delete(id: number) {
        return this.prisma.feed.delete({
            where: {
                id,
            }
        })
    }
}
