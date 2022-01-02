import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { BlogsModule } from './blogs/blogs.module';
import { FeedsModule } from './feeds/feeds.module';
import { CommentsModule } from './comments/comments.module';
import { SupportsModule } from './supports/supports.module';

@Module({
  imports: [PrismaModule, UsersModule, TagsModule, BlogsModule, FeedsModule, CommentsModule, SupportsModule],
})
export class AppModule {}
