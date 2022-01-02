import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Role, User } from 'shared/prisma/generated/prisma-client-js';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(PartialType(CreateUserDto), ["email"]) implements Partial<Omit<User, "id" | "email">> {
    avatar?: string;
    role?: Role;
    phone?: string;
}
