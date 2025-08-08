import { Injectable, NotFoundException, Inject } from "@nestjs/common";
import type { ITeamsRepository } from "../repositories/ITeamsRepository";
import { Team } from "../models/Team.entity";

@Injectable()
export class TeamsService {
    constructor(
        @Inject('ITeamsRepository')
        private readonly teamsRepository: ITeamsRepository
    ) {}

    async findAll(): Promise<Team[]> {
        return await this.teamsRepository.findAll();
    }

    async findById(id: string): Promise<Team> {
        const team = await this.teamsRepository.findById(id);
        if (!team) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }
        return team;
    }

    async create(data: Partial<Team>): Promise<Team> {
        return await this.teamsRepository.create(data);
    }

    async update(id: string, data: Partial<Team>): Promise<Team> {
        const team = await this.teamsRepository.update(id, data);
        if (!team) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }
        return team;
    }

    async delete(id: string): Promise<void> {
        const deleted = await this.teamsRepository.delete(id);
        if (!deleted) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }
    }
}