import { OmitType, PartialType } from "@nestjs/mapped-types";
import { BlogEntity } from "../entities/blog.entity"

export class UpdateBlogDto extends PartialType(OmitType(BlogEntity, ["id", "created_at"])) {}