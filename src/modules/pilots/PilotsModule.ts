import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from './models/Pilot.entity';
import { PilotsController } from './controller/PilotsController';
import { PilotsService } from './services/PilotsService';
import { TypeOrmPilotsRepository } from './repositories/TypeOrmPilotsRepository';
import type { IPilotsRepository } from './repositories/IPilotsRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Pilot])],
  controllers: [PilotsController],
  providers: [
    PilotsService,
    {
      provide: 'IPilotsRepository',
      useClass: TypeOrmPilotsRepository,
    },
  ],
  exports: [PilotsService],
})
export class PilotsModule {}
