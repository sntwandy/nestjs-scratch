/**
 *
 */

import { Controller, Module, Get } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Hi there!!'
  }
}

/* The module decorator is to tell to Nest the controller that we have */
@Module({
  controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
  const app = NestFactory.create(AppModule)

  await (await app).listen(3000)
}

bootstrap()