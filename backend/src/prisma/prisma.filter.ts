import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError  } from "shared/prisma/generated/prisma-client-js/runtime"
import { Response } from "express"

interface PrismaError {
  errorCode: string;
  message: string;
}

@Catch(
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientValidationError,
  PrismaClientInitializationError,
)
export class PrismaFilter<T> extends BaseExceptionFilter {
  override catch(error: T, host: ArgumentsHost) {
      const response = host.switchToHttp().getResponse<Response>();
      
      if (error instanceof PrismaClientKnownRequestError) {
          const prismaError: PrismaError = {
              errorCode: error.code,
              message: error.message,
          };

          response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(prismaError);
      } else {
          /* eslint-disable promise/valid-params */
          /* eslint-disable promise/no-promise-in-callback */          
          super.catch(error, host);
          
      }
  }
}