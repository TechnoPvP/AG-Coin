import { OmitType, PartialType } from "@nestjs/mapped-types";
import { FeedEntity } from "../entities/feed.entity";

export class UpdateFeedDto extends PartialType( OmitType(FeedEntity, ["userId", "id"]) ) {}