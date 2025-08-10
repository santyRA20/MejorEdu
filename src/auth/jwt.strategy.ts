import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(cfg: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: cfg.get<string>('JWT_SECRET', 'test-secret'), // 👈 mismo origen
      ignoreExpiration: false,
    });
  // console.log('[JwtStrategy] secret:', cfg.get('JWT_SECRET')); // debug opcional
  }

  async validate(payload: any) {
  // console.log('[JwtStrategy.validate] payload:', payload); // debug opcional
    return { id: payload.sub, email: payload.email, username: payload.username };
  }
}
