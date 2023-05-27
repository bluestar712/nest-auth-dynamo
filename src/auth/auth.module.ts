import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AccessTokenStragegy } from "./strategies/accessToken.strategy";
import { RefreshTokenStragegy } from "./strategies/refreshToken.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({ })
    ],
    controllers: [AuthController],
    providers: [AuthService, AccessTokenStragegy, RefreshTokenStragegy],
    exports: [AuthService]
})
export class AuthModule {}