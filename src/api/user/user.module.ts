import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRoleAssignedListener } from './listeners/user-role-assigned.listener';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRoleAssignedListener],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
