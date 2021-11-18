import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user/user.model';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      userId: '1',
      birthday: new Date('09-04-2010'),
      firstName: 'Chris',
      lastName: 'van Dyk',
      emailAddress: 'cdijk4@gmail.com',
      lockedOut: false,
      officeId: '1',
    },
    {
      userId: '2',
      birthday: new Date('25-12-1994'),
      firstName: 'Cody',
      lastName: 'van Ditches',
      emailAddress: 'cody.ditches@gmail.com',
      lockedOut: false,
      officeId: '1',
    },
    {
      userId: '3',
      birthday: new Date('21-04-1999'),
      firstName: 'Petr',
      lastName: 'von Lar',
      emailAddress: 'ptar.vonlar@gmail.com',
      lockedOut: false,
      officeId: null,
    },
  ];

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteById(userId: string): boolean {
    var deleted = false;

    if (this.users.map((u) => u.userId).includes(userId)) {
      this.users = this.users.filter((u) => u.userId != userId);
      deleted = true;
    }

    return deleted;
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
