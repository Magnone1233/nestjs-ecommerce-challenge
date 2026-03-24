import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Role } from 'src/database/entities/role.entity';
import { AssignRoleDto } from '../dto/role.dto';
import { UserRoleAssignedEvent } from '../events/user-role-assigned.event';
import { errorMessages } from 'src/errors/custom';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async assignRoleToUser(data: AssignRoleDto) {
    const role = await this.findById(data.roleId);

    this.eventEmitter.emit(
      'user.role.assigned',
      new UserRoleAssignedEvent(data.userId, role),
    );

    return { success: true, message: 'Role assignment queued' };
  }

  async findById(roleId: number) {
    const role = await this.rolesRepository.findOne({
      where: { id: roleId },
    });
    if (!role) {
      throw new NotFoundException(errorMessages.role.notFound);
    }
    return role;
  }
}
