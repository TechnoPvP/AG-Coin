import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { SessionData } from 'express-session';
import { Roles } from 'src/roles.decorator';
import { IsLoggedInGuard } from 'src/users/is-logged-in.guard';
import { CreateFeedDto } from './dto/create-feed.dto';
import { ResultFeedDto } from './dto/result-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll() {
    const result = await this.feedsService.getAll()
    return result.map( feed => new ResultFeedDto( feed ) )
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(IsLoggedInGuard)
  async create (@Session() session: SessionData, @Body() feed: CreateFeedDto) {
    const result = await this.feedsService.create(session, feed)
    return new ResultFeedDto( result )
  }

  @Put(":id")
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(IsLoggedInGuard)
  async update (@Param('id', ParseIntPipe) id: number, @Session() session: SessionData, @Body() feed: UpdateFeedDto) {
    const result = await this.feedsService.update(session, id, feed)
    return new ResultFeedDto( result )
  }

  @Delete(":id")
  @Roles("SELF", "ADMIN")
  delete (@Param('id', ParseIntPipe) id: number) {
    return this.feedsService.delete(id)
  }
}
