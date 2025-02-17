import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeOrm';
import dataSource from './db/sql-db';
import { UsersModule } from './users/users.module'; 

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource),
    UsersModule,
  ],
})
export class AppModule {}
