
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeOrm';
import { UsersService } from './service/user.service';
import { UsersController } from './controllers/users.controller';
import { User } from '../Entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
