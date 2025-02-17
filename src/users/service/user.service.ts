import { Injectable, ParseIntPipe, UsePipes } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeOrm';
import { Repository } from 'typeorm';
import { User } from '../../Entities/users.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }


  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async create(registerBody): Promise<any> {
    let user: any =  await this.usersRepository.create({
    firstName:registerBody.firstName,
      lastName: registerBody.lastName,
    });
    return await this.usersRepository.save(user);
  }
  @UsePipes(ParseIntPipe)
  async getUserById(id: number): Promise<User | null>{
    const user = await this.usersRepository.findOne({
      where: { id },
    });
    return user;
  }
  async deleteUser(id:number):Promise<any> {
    let response = await this.usersRepository.delete(id);
    return response;
  }
}
