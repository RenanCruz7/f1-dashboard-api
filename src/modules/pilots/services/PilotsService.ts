import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import type { IPilotsRepository } from '../repositories/IPilotsRepository';
import { Pilot } from '../models/Pilot.entity';
import type { CreatePilotDTO } from '../dtos/CreatePilotDTO';
import type { UpdatePilotDTO } from '../dtos/UpdatePilotDTO';

@Injectable()
export class PilotsService {
  constructor(
    @Inject('IPilotsRepository')
    private readonly pilotsRepository: IPilotsRepository
  ) {}

  async findAll(): Promise<Pilot[]> {
    return await this.pilotsRepository.findAll();
  }

  async findOne(id: string): Promise<Pilot> {
    const pilot = await this.pilotsRepository.findOne(id);
    if (!pilot) {
      throw new NotFoundException(`Pilot with ID ${id} not found`);
    }
    return pilot;
  }

  async findByTeam(team: string): Promise<Pilot[]> {
    return await this.pilotsRepository.findByTeam(team);
  }

  async create(createPilotDTO: CreatePilotDTO): Promise<Pilot> {
    return await this.pilotsRepository.create(createPilotDTO);
  }

  async update(id: string, updatePilotDTO: UpdatePilotDTO): Promise<Pilot> {
    const exists = await this.pilotsRepository.exists(id);
    if (!exists) {
      throw new NotFoundException(`Pilot with ID ${id} not found`);
    }
    return await this.pilotsRepository.update(id, updatePilotDTO);
  }

  async remove(id: string): Promise<void> {
    const exists = await this.pilotsRepository.exists(id);
    if (!exists) {
      throw new NotFoundException(`Pilot with ID ${id} not found`);
    }
    await this.pilotsRepository.remove(id);
  }
}
