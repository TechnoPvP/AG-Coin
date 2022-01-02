import { IsLowercase, MinLength } from "class-validator";

export class UpdateTagDto {
    @MinLength(2, { message: "before must be 2 character or more." })
    @IsLowercase()
    before: string;

    @MinLength(2, { message: "after must be 2 character or more." })
    @IsLowercase()
    after: string;
}