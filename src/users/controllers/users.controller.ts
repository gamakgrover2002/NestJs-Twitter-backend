import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from '../service/user.service';
import { RegisterDTO } from '../dto/registerDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  findAll(): any {
    return this.usersService.findAll();
  }

  @Post('/new')
  create(@Body() registerBody: RegisterDTO): any {
    return this.usersService.create(registerBody);

  }
  @Get('/:id')

  findOne(@Param("id") id: string): any {
    return this.usersService.getUserById(Number(id));
  }
  @Delete("/:id")
  remove(@Param("id") id: string): any {
    return this.usersService.deleteUser(Number(id));
  }
}
