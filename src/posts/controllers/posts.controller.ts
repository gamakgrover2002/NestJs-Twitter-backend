import { Body, Controller, Param } from "@nestjs/common";
import { PostService } from "../service/posts.service";
import { Get,Post } from "@nestjs/common";
import {newPostDto} from "../dto/newPostDto"
import { UsersService } from "src/users/service/user.service";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostService,private readonly userService:UsersService ) {}

    @Get()
  async getAllPosts(): Promise<any> {
        return this.postsService.getAllPosts();
    }
     @Post("/new")
    // eslint-disable-next-line prettier/prettier
    async createPost(@Body() createPostDto: newPostDto): Promise<any> {
        return this.postsService.newPosts(createPostDto);
    }
}
