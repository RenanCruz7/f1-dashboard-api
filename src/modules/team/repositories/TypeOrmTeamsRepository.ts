import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Team } from "../models/Team.entity";
import { ITeamsRepository } from "./ITeamsRepository";
import type { CreateTeamDTO } from '../dtos/CreateTeamDTO';
import type { UpdateTeamDTO } from '../dtos/UpdateTeamDTO';

export class TypeOrmTeamsRepository implements ITeamsRepository {
  constructor(
    @InjectRepository(Team)
    private readonly typeormRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return await this.typeormRepository.find({
      order: { createdAt: 'DESC' }
    });
  }

  async findById(id: string): Promise<Team | null> {
    return await this.typeormRepository.findOne({ where: { id } });
  }

  async create(data: CreateTeamDTO): Promise<Team> {
    const team = this.typeormRepository.create(data);
    return await this.typeormRepository.save(team);
  }

  async update(id: string, data: UpdateTeamDTO): Promise<Team | null> {
    await this.typeormRepository.update(id, data);
    return await this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
  const result = await this.typeormRepository.delete(id);
  return (result.affected ?? 0) > 0;
  }
}