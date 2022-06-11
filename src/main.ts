/**
 *
 */

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = NestFactory.create(AppModule)

  await (await app).listen(3000)
}

bootstrap()