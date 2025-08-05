import { Pilot } from '../models/Pilot.entity';
import type { CreatePilotDTO } from '../dtos/CreatePilotDTO';
import type { UpdatePilotDTO } from '../dtos/UpdatePilotDTO';

export interface IPilotsRepository {
  findAll(): Promise<Pilot[]>;
  findOne(id: string): Promise<Pilot | null>;
  findByTeam(team: string): Promise<Pilot[]>;
  create(createPilotDTO: CreatePilotDTO): Promise<Pilot>;
  update(id: string, updatePilotDTO: UpdatePilotDTO): Promise<Pilot>;
  remove(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
