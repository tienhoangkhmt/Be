import { DEFAULT_DATABASE_TYPE } from 'src/Constants/constants';
import { TypeOrmModule } from '@nestjs/typeorm';

const connectDatabase = () =>
  TypeOrmModule.forRoot({
    type: DEFAULT_DATABASE_TYPE.MYSQL,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    // synchronize: true,
  });

export default connectDatabase;
