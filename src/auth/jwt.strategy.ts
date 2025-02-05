import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private jwtService: JwtService) {
    super({
      jwtFromRequest: (req) => req.headers.authorization.split(' ')[1],
      secretOrKey: 'your-secret-key',
    });
  }

  async validate(payload: any) {
    return { email: payload.email };
  }
}
