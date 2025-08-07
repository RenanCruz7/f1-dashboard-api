import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teams')
export class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'text', nullable: true })
    headquarters: string;

    @Column({ type: 'numeric', precision: 10, scale: 2, unique: true })
    constructor_titles: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    points: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    manager: string;

}