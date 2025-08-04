import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pilot, PilotSchema } from './models/Pilot';
import { PilotsController } from './controller/PilotsController';
import { PilotsService } from './services/PilotsService';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pilot.name, schema: PilotSchema }])],
  controllers: [PilotsController],
  providers: [PilotsService],
  exports: [PilotsService],
})
export class PilotsModule {}
