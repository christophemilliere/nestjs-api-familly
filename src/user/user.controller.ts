import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly photoService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.photoService.findAll();
  }
}
