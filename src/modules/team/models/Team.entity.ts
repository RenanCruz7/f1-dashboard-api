import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teams')
export class Team {
    @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column({ type: 'varchar', length: 100 })
      name: string;
}