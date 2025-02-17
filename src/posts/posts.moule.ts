import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeOrm";
import { PostService } from "./service/posts.service";
import { PostsController } from "./controllers/posts.controller";
import { Post } from "../Entities/posts.entities";


@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    providers: [PostService],
    controllers: [PostsController],
  })
  export class PostsModule {}
  

  
