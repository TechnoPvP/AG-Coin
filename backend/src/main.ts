import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as session from "express-session"
import { PrismaSessionStore } from "@quixo3/prisma-session-store"
import { PrismaFilter } from './prisma/prisma.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist:  true,
    forbidNonWhitelisted: true,
    transform: true,
  }))
  app.setGlobalPrefix( "api" )
  app.useGlobalFilters( new PrismaFilter() )
  
  const prisma = app.get( PrismaService )
  app.use(
    session({
      secret: "efkhkdkekk-gkwrthk",
      resave: false,
      saveUninitialized: false,
      store: new PrismaSessionStore(prisma, {
        checkPeriod: 2 * 60 * 1000,
      })
    })
  )

  await app.listen(3000);
}

bootstrap();
