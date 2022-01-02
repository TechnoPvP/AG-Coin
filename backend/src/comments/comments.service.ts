import { Injectable } from '@nestjs/common';
import { SessionData } from 'express-session';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResultCommentDto } from './dto/result-comment.dto';

@Injectable()
export class CommentsService {
    constructor (private prisma: PrismaService) {}

    async getAll() {
        const comments = await this.prisma.feedComment.findMany({ include: { user: true } })

        const commentsMap = new Map<number, ResultCommentDto[]>()
        comments.forEach( comment => {
            const arr = commentsMap.get( comment.feedId ) ?? []
            arr.push( new ResultCommentDto( comment ) )
            commentsMap.set( comment.feedId, arr )
        } )

        return Object.fromEntries( commentsMap )
    }

    async getOne (id: number) {
        return this.prisma.feedComment.findFirst({ 
            where: { id },
            include: { user: true } 
        })
    }

    async create( id: number, session: SessionData, content: string ) {
        return this.prisma.feedComment.create({
            data: {
                content,
                feedId: id,
                userID: session.user?.id
            },
            include: { user: true }
        })
    }
}
