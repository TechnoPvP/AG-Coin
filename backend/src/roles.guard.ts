import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from "shared/prisma/generated/prisma-client-js"
import { Request } from "express"

export type Self = "SELF"

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<(Role | Self)[]>('roles', context.getHandler())
    if ( !roles ) return true

    const request = context.switchToHttp().getRequest<Request>()
    const user = request.session.user
    if ( !user ) throw new UnauthorizedException()
    
    const paramCheck = this.reflector.get<string>('UserParam', context.getHandler()) ?? 'id'
    if ( roles.includes( "SELF" ) && parseInt(request.params[paramCheck]) == user.id ) {
      return true
    }

    return roles.includes( user.role );
  }
}
