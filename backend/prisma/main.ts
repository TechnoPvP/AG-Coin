import { PrismaClient } from "./generated/prisma-client-js"

export const prisma = new PrismaClient()
console.log( process.env )