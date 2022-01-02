import { Injectable } from '@nestjs/common';
import { PrismaClient } from "shared/prisma/generated/prisma-client-js"
import { PrismaClientKnownRequestError } from 'shared/prisma/generated/prisma-client-js/runtime';
import { OnModuleInit } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor () {
    super({
      rejectOnNotFound: {
        findFirst: (err) => new PrismaClientKnownRequestError(err.message, "P2025", "some version")
      }
    })
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });    
  }
}
