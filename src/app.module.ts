import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';
import config from './config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_DBNAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
