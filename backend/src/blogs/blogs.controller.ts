import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/roles.decorator';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  findAll() {
    return this.blogsService.getAll()
  }

  @Get(":id")
  findOne( @Param("id", ParseIntPipe) id: number ) {
    return this.blogsService.getOne( id )
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles("ADMIN")
  create (@Body() blog: CreateBlogDto) {
    return this.blogsService.create( blog )
  }

  @Put(":id")
  @Roles("ADMIN")
  update(@Param("id", ParseIntPipe) id: number, @Body() blog: UpdateBlogDto) {
    return this.blogsService.update( id, blog )
  }

  @Delete(":id")
  @Roles("ADMIN")
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.blogsService.delete( id )
  }
}