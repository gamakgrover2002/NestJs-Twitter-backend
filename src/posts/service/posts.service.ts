import { Post } from "src/Entities/posts.entities";
import { InjectRepository } from '@nestjs/typeOrm';
import { Repository } from 'typeorm';
import { newPostDto } from "../dto/newPostDto";
export class PostService {
      constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
      ) {}
  getAllPosts(): Promise<Post[]> {
    return this.postsRepository.find();
  }
  newPosts(newPosts: newPostDto): Promise<any> {
    let res =  this.postsRepository.save({
        title: newPosts.title,
        content: newPosts.content,
        createdBy: newPosts.createdBy,
    });
    return res;
  }


}
