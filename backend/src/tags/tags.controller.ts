import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/roles.decorator';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagEntity } from './entities/tag.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  findAll() {
    return this.tagsService.getAll()
  }

  @Post(":name")
  @Roles("ADMIN")
  insert(@Param() params: TagEntity) {
    return this.tagsService.create( params.name )
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put()
  @Roles("ADMIN")
  update(@Body() params: UpdateTagDto) {
    return this.tagsService.update( params )
  }
  
  @Roles("ADMIN")
  @Delete(":name")
  async delete(@Param() params: TagEntity) {
    const tag = await this.tagsService.delete( params.name )
    return { ok: `Deleted ${tag.name}`, value: tag.name }
  }

}