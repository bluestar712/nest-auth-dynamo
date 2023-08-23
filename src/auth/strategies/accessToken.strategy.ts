import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthJwtPayload } from '../interface/auth.interface';

@Injectable()
export class AccessTokenStragegy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jwt_access_secret',
    });
  }

  validate(payload: IAuthJwtPayload) {
    return payload;
  }
}
