import { Body, ClassSerializerInterceptor, Controller, Get, Param, ParseIntPipe, Post, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { SessionData } from 'express-session';
import { IsLoggedInGuard } from 'src/users/is-logged-in.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ResultCommentDto } from './dto/result-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.commentsService.getAll()
  }

  @Get(":id")
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne (@Param("id", ParseIntPipe) id: number) {
    const result = await this.commentsService.getOne( id )
    return new ResultCommentDto( result )
  }

  @Post(":id")
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(IsLoggedInGuard)
  async create (@Param("id", ParseIntPipe) id: number, @Session() session: SessionData, @Body() body: CreateCommentDto) {
    const result = await this.commentsService.create(id, session, body.content)
    return new ResultCommentDto( result )
  }
}
