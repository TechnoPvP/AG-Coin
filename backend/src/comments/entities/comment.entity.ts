import { FeedComment } from "shared/prisma/generated/prisma-client-js"
import { IsNotEmpty } from "class-validator";

export class CommentEntity implements FeedComment {
    id: number;
    
    @IsNotEmpty()
    content: string;
    
    @IsNotEmpty()
    feedId: number;

    @IsNotEmpty()
    userID: number;
    
    created_at: Date;
}