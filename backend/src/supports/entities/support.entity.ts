import { Support, Topics } from "shared/prisma/generated/prisma-client-js";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class SupportEntity implements Support {
    id: string;
    
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    content: string;
    
    @IsOptional()
    @IsEnum(Topics, { each: true })
    topics: Topics[];
}