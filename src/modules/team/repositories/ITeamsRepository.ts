import { Team } from "../models/Team.entity";
import type { CreateTeamDTO } from '../dtos/CreateTeamDTO';
import type { UpdateTeamDTO } from '../dtos/UpdateTeamDTO';

export interface ITeamsRepository {
    findAll(): Promise<Team[]>;
    findById(id: string): Promise<Team | null>;
    create(data: CreateTeamDTO): Promise<Team>;
    update(id: string, data: UpdateTeamDTO): Promise<Team | null>;
    delete(id: string): Promise<boolean>;
}
