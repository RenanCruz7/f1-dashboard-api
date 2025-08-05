import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from './models/Pilot.entity';
import { PilotsController } from './controller/PilotsController';
import { PilotsService } from './services/PilotsService';

@Module({
  imports: [TypeOrmModule.forFeature([Pilot])],
  controllers: [PilotsController],
  providers: [PilotsService],
  exports: [PilotsService],
})
export class PilotsModule {}
