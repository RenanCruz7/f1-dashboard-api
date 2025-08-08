import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Team } from "../models/Team.entity";
import { ITeamsRepository } from "./ITeamsRepository";

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

  async create(data: Partial<Team>): Promise<Team> {
    const team = this.typeormRepository.create(data);
    return await this.typeormRepository.save(team);
  }

  async update(id: string, data: Partial<Team>): Promise<Team | null> {
    await this.typeormRepository.update(id, data);
    return await this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
  const result = await this.typeormRepository.delete(id);
  return (result.affected ?? 0) > 0;
  }
}