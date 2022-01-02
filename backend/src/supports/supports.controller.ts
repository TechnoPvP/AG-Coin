import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { Roles } from 'src/roles.decorator';
import { UpdateSupportDto } from './dto/update-support.dto';
import { SupportEntity } from './entities/support.entity';
import { SupportsService } from './supports.service';

@Controller('supports')
export class SupportsController {
  constructor(private readonly supportsService: SupportsService) {}

  @Get()
  findAll() {
    return this.supportsService.getAll()
  }
  
  @Get(":title/:id")
  async findOne(@Param("title") title: string, @Param("id", ParseUUIDPipe) id: string) {     
    return this.supportsService.getOne(title, id)
  }

  @Post()
  @Roles("ADMIN")
  create(@Body() support: SupportEntity) {
    return this.supportsService.create(support)
  }

  @Put(":id")
  @Roles("ADMIN")
  update(@Param("id", ParseUUIDPipe) id: string, @Body() support: UpdateSupportDto) {
    return this.supportsService.update(id, support)
  }

  @Delete(":id")
  @Roles("ADMIN")
  delete( @Param("id", ParseUUIDPipe) id: string ) {
    return this.supportsService.delete( id )
  }
}
