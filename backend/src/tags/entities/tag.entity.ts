import { Tag } from "shared/prisma/generated/prisma-client-js";
import { IsLowercase, MinLength } from "class-validator";

export class TagEntity implements Omit<Tag, 'id'> {
    constructor(value: TagEntity) {
        Object.assign(this, value)
    }

    @MinLength(2, { message: "name must be 2 character or more." })
    @IsLowercase()
    name: string
}