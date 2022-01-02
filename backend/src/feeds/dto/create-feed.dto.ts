import { OmitType } from "@nestjs/mapped-types";
import { FeedEntity } from "../entities/feed.entity";

export class CreateFeedDto extends OmitType(FeedEntity, ['userId', "id"]) {}