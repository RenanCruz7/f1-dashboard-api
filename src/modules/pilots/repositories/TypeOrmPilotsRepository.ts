import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pilot } from '../models/Pilot.entity';
import type { IPilotsRepository } from './IPilotsRepository';
import type { CreatePilotDTO } from '../dtos/CreatePilotDTO';
import type { UpdatePilotDTO } from '../dtos/UpdatePilotDTO';

@Injectable()
export class TypeOrmPilotsRepository implements IPilotsRepository {
  constructor(
    @InjectRepository(Pilot)
    private readonly typeormRepository: Repository<Pilot>,
  ) {}

  async findAll(): Promise<Pilot[]> {
    return await this.typeormRepository.find({
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: string): Promise<Pilot | null> {
    return await this.typeormRepository.findOne({ where: { id } });
  }

  async findByTeam(team: string): Promise<Pilot[]> {
    return await this.typeormRepository.find({ 
      where: { team },
      order: { name: 'ASC' }
    });
  }

  async create(createPilotDTO: CreatePilotDTO): Promise<Pilot> {
    const pilot = this.typeormRepository.create(createPilotDTO);
    return await this.typeormRepository.save(pilot);
  }

  async update(id: string, updatePilotDTO: UpdatePilotDTO): Promise<Pilot> {
    await this.typeormRepository.update(id, updatePilotDTO);
    const updatedPilot = await this.findOne(id);
    if (!updatedPilot) {
      throw new Error(`Pilot with ID ${id} not found after update`);
    }
    return updatedPilot;
  }

  async remove(id: string): Promise<void> {
    await this.typeormRepository.delete(id);
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.typeormRepository.count({ where: { id } });
    return count > 0;
  }
}
