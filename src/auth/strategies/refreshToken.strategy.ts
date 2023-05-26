import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";

@Injectable()
export class RefreshTokenStragegy extends PassportStrategy(Strategy, 'jwt-refresh'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jwt_refresh_secret',
            passReqToCallback: true
        });
    }

    validate(req: Request, payload: any){
        const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
        return {...payload, refreshToken}
    }
}