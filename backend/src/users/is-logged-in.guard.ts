import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>()
    if (!request.session.user) throw new UnauthorizedException()
    return true;
  }
}