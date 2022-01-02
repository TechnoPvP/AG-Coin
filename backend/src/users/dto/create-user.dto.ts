import { IsEmail, Matches, MinLength, NotContains } from "class-validator";
import { User } from "shared/prisma/generated/prisma-client-js";

export class CreateUserDto implements Pick<User, "first_name" | "last_name" | "email" | "password"> {
    @MinLength(2)
    @NotContains(" ", { message: "Password cannot contain any whitespaces" })
    first_name: string

    @MinLength(2)
    @NotContains(" ", { message: "Password cannot contain any whitespaces" })
    last_name: string
    
    @IsEmail()
    email: string
    
    @MinLength(5)
    @Matches(/.*[0-9].*/, { message: "Password must contain atleast 1 numerical character" })
    @Matches(/.*[!@#$%^&*(),.?":{}|<>].*/, { message: "Password must contain atleast 1 special character" })
    @NotContains(" ", { message: "Password cannot contain any whitespaces" })
    password: string
}
