import { TypeOrmModuleOptions } from '@nestjs/typeOrm'
import {User} from '../Entities/users.entity';
import {Post} from "../Entities/posts.entities"

const dataSource: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@8P20pm0133',
  database: 'stock',
  entities: [Post,User],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  synchronize: true,
};

export default dataSource;
