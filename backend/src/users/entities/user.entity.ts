import { User, Role } from "shared/prisma/generated/prisma-client-js"
import { Exclude } from "class-transformer"

export class UserEntity implements User {
    constructor(value: UserEntity) {
        Object.assign(this, value)
    }
    
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    role: Role;
    phone: string | null;

    @Exclude()
    password: string;
}