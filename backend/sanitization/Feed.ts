import { sanitize as sanitizeUser } from "../sanitization/User"
import { sanitizeComment } from "./FeedComment"
import { Feed, FeedComment, User } from "shared/prisma/generated/prisma-client-js"

export const sanatizedFeed = (feed: Feed & { user: User, comments: (FeedComment & { user: User })[] }) => {
    return {
        ...feed,
        user: sanitizeUser( feed.user ),
        comments: feed.comments.map( sanitizeComment )
    }
}