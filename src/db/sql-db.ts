import { TypeOrmModuleOptions } from '@nestjs/typeOrm'

const dataSource: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@8P20pm0133',
  database: 'stock',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  synchronize: true,
};

export default dataSource;
