import { Response } from 'express';
import { PrismaClientKnownRequestError } from 'shared/prisma/generated/prisma-client-js/runtime';

export const onErr = (res: Response, error: string, status = 400) => {
    res.status(status).json({ error })
}

export const ErrorHandler = (error: unknown): string => {
    if ( error instanceof PrismaClientKnownRequestError ) {
        switch (error.code) {
            case "P2002":
                type Meta =  { target: string[] }
                return `that ${(error.meta as Meta).target.join(', ')} already exists`
            case "P2025":
                return "That Record Does Not Exist."
            default:
                return `Unchecked Prisma Client Error ${error.code}`
        }
    }

    console.error(`UNKNOWN Error - ${error}`);
    return "Unknown Error"
}

