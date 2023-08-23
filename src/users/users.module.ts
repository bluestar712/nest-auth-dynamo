import { DynamooseModule } from 'nestjs-dynamoose';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
        options: {
          tableName: 'user',
        },
        serializers: {
          frontend: { exclude: ['password', 'refreshToken'] },
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
