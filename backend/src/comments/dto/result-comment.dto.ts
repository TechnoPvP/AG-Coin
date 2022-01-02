import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { UserEntity } from "src/users/entities/user.entity";
import { CommentEntity } from "../entities/comment.entity";

export class ResultCommentDto extends CommentEntity {
    constructor (value: ResultCommentDto) {
        super()
        Object.assign(this, value)
    }

    @ValidateNested()
    @Type(() => UserEntity)
    user: UserEntity
}