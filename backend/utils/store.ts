import { PrismaSessionStore } from "@quixo3/prisma-session-store"
import { prisma } from "shared/prisma/main"

export default new PrismaSessionStore(prisma, {
  checkPeriod: 2 * 60 * 1000,
})