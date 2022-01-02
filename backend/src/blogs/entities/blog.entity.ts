import { Blog, Difficulty, Status } from "shared/prisma/generated/prisma-client-js";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, ValidateNested } from "class-validator";
import { TagEntity } from "src/tags/entities/tag.entity";

type BlogWithTags<T = TagEntity> = Blog & { tags: T[] }
export class BlogEntity implements BlogWithTags {
    id: number;
    
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    body: string;
    
    @IsNotEmpty()
    thumbnail: string;
    
    @IsEnum( Difficulty )
    difficulty: Difficulty;

    @IsEnum(Status)
    status: Status;
    
    created_at: Date;

    @ValidateNested({ each: true })
    @Type(() => TagEntity)
    tags: TagEntity[];
}