import { Team } from "../models/Team.entity";

export interface ITeamsRepository {
    findAll(): Promise<Team[]>;
    findById(id: string): Promise<Team | null>;
    create(data: Partial<Team>): Promise<Team>;
    update(id: string, data: Partial<Team>): Promise<Team | null>;
    delete(id: string): Promise<boolean>;
}
