import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pilot } from '../models/Pilot.entity';
import type { CreatePilotDTO } from '../dtos/CreatePilotDTO';
import type { UpdatePilotDTO } from '../dtos/UpdatePilotDTO';

@Injectable()
export class PilotsService {
  constructor(
    @InjectRepository(Pilot)
    private pilotsRepository: Repository<Pilot>,
  ) {}

  async findAll(): Promise<Pilot[]> {
    return await this.pilotsRepository.find();
  }

  async findOne(id: string): Promise<Pilot> {
    const pilot = await this.pilotsRepository.findOne({ where: { id } });
    if (!pilot) {
      throw new NotFoundException(`Pilot with ID ${id} not found`);
    }
    return pilot;
  }

  async create(createPilotDTO: CreatePilotDTO): Promise<Pilot> {
    const pilot = this.pilotsRepository.create(createPilotDTO);
    return await this.pilotsRepository.save(pilot);
  }

  async update(id: string, updatePilotDTO: UpdatePilotDTO): Promise<Pilot> {
    const pilot = await this.findOne(id);
    Object.assign(pilot, updatePilotDTO);
    return await this.pilotsRepository.save(pilot);
  }

  async remove(id: string): Promise<void> {
    const pilot = await this.findOne(id);
    await this.pilotsRepository.remove(pilot);
  }
}
