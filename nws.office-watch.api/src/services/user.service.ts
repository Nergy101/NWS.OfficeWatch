import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.model';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: '1',
      birthday: new Date('09-04-1999'),
      firstName: 'Chris',
      lastName: 'van Dyk',
      emailAddress: 'cdijk4@gmail.com',
      lockedOut: false,
      officeId: '1',
    },
    {
      userId: '2',
      birthday: new Date('05-07-1992'),
      firstName: 'Cody',
      lastName: 'van Ditches',
      emailAddress: 'cody.ditches@gmail.com',
      lockedOut: false,
      officeId: '1',
    },
  ];

  create(user: User) {
    this.users.push(user);
  }

  findOneById(userId: string): User | undefined {
    const users = this.users.filter((o) => o.userId === userId);
    if (users.length > 0) {
      return users[0];
    }
    return undefined;
  }

  findAll(): User[] {
    return this.users;
  }
}
