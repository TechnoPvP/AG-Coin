import { SetMetadata } from '@nestjs/common';

export const UserParam = (param: string) => SetMetadata('UserParam', param);
