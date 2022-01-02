import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ResultCommentDto } from "src/comments/dto/result-comment.dto";
import { UserEntity } from "src/users/entities/user.entity";
import { FeedEntity } from "../entities/feed.entity";

export class ResultFeedDto extends FeedEntity {
    constructor (value: ResultFeedDto) {
        super()
        Object.assign(this, value)
    }

    @ValidateNested()
    @Type(() => UserEntity)
    user: UserEntity;

    @ValidateNested({ each: true })
    @Type(() => ResultCommentDto)
    comments: ResultCommentDto[]
}