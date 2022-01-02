import { PartialType } from "@nestjs/mapped-types";
import { SupportEntity } from "../entities/support.entity";

export class UpdateSupportDto extends PartialType(SupportEntity) {}