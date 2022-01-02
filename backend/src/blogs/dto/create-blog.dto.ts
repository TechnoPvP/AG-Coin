import { OmitType } from "@nestjs/mapped-types";
import { Difficulty } from "shared/prisma/generated/prisma-client-js";
import { IsEnum, IsOptional, IsUrl } from "class-validator";
import { BlogEntity } from "../entities/blog.entity"

export class CreateBlogDto extends OmitType(BlogEntity, ["id", "created_at", "thumbnail", "difficulty"]) {    
    @IsOptional()
    @IsUrl()
    thumbnail?: string

    @IsOptional()
    @IsEnum(Difficulty)
    difficulty?: Difficulty
}