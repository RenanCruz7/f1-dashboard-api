import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './models/Team.entity';
import { TeamController } from './controller/TeamController';
import { TeamsService } from './services/TeamsService';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
