import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeOrm';
import dataSource from './db/sql-db';
import { UsersModule } from './users/users.module'; 
import { PostsModule } from './posts/posts.moule';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource),
    UsersModule,
    PostsModule
  ],
})
export class AppModule {}
