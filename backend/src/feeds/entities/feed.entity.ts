import { Feed } from "shared/prisma/generated/prisma-client-js";
import { IsNotEmpty, IsOptional, IsUrl, MinLength } from "class-validator";

export class FeedEntity implements Omit<Feed, 'created_at'> {
    id: number;

    @IsNotEmpty()
    @MinLength(2)
    caption: string;
    
    @IsOptional()
    @IsUrl()
    thumbnail: string;

    @IsNotEmpty()
    userId: number;
}