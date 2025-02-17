import { Post } from "src/Entities/posts.entities";
import { InjectRepository } from '@nestjs/typeOrm';
import { Repository } from 'typeorm';
export class PostService {
      constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
      ) {}
  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

}
