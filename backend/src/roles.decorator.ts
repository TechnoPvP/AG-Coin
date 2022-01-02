import { SetMetadata } from '@nestjs/common';
import { Role } from "shared/prisma/generated/prisma-client-js"
import { Self } from "./roles.guard"

export const Roles = (...args: (Role |  Self)[]) => SetMetadata('roles', args);
