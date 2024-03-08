import { ConfigModule } from '@nestjs/config';

export const ConfigEnvironment = () => {
  return ConfigModule.forRoot();
};
