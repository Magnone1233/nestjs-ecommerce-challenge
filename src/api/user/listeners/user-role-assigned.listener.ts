import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserRoleAssignedEvent } from 'src/api/role/events/user-role-assigned.event';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserRoleAssignedListener {
  constructor(private readonly userService: UserService) {}

  @OnEvent('user.role.assigned')
  async handleUserRoleAssigned(event: UserRoleAssignedEvent) {
    const user = await this.userService.findById(event.userId, { roles: true });
    if (!user.roles.some((role) => role.id === event.role.id)) {
      user.roles.push(event.role);
      await this.userService.save(user);
    }
  }
}
