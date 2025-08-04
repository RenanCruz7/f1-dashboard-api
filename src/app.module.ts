import { Module } from '@nestjs/common';
import { PilotsController } from './modules/pilots/controller/PilotsController';

@Module({
  imports: [],
  controllers: [PilotsController],
  providers: [],
})
export class AppModule {}
