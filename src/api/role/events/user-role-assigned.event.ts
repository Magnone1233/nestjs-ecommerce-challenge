import { Role } from 'src/database/entities/role.entity';

export class UserRoleAssignedEvent {
  constructor(public readonly userId: number, public readonly role: Role) {}
}
