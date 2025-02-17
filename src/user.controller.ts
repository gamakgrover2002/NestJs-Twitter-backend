import { Body, Controller, Get, Post,Param, Put,Delete } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';

let Users: CreateUserDTO[] = []
@Controller()
export class UsersController{
  @Get()
  getAllUsers(): any[] {
    return Users;
  }
  @Post()
  addUser(@Body() user: CreateUserDTO) {
    let isPresent = false;
    let id = user.id;
    Users.forEach((u) => {
      if (u.id === id) {
        isPresent = true;
      }
    });
    if(isPresent){
      return [];
    }
    Users.push(user); 
    return user;
  }
  @Get("/:id")
  getUserByName(@Param("id") id: String){
    let res =  Users.filter((e)=> e.id===id);
    console.log(Users);
    return res;
  }
  @Put("/:id")
  updateUser(@Param("id") id: String,@Body() updatedUser:updateUserDTO ){
    let userIndex = Users.findIndex((u) => u.id === id);
    if (userIndex!== -1) {
         Users[userIndex] = {...Users[userIndex],...updatedUser };
         return Users[userIndex];

    } else {
      return [];
    }
  }
  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    Users = Users.filter((u) => u.id!== id);
    return { message: 'User deleted successfully.' };
  }
  


  
}
