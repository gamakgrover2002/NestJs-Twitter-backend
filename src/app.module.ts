import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { TypeOrmModule } from '@nestjs/typeOrm';
import dataSource from './db/sql.db';
@Module({
  imports: [TypeOrmModule.forRoot(dataSource)],
  controllers: [UsersController, PostsController],

})
export class AppModule {}
