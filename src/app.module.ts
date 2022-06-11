/**
 *
 */

import { Module } from "@nestjs/common"
import { AppController } from './app.controller'

/* The module decorator is to tell to Nest the controller that we have */
@Module({
  controllers: [AppController]
})
export class AppModule {}
