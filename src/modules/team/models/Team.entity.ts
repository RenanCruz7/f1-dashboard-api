import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('teams')
export class Team {
    @ApiProperty({
        description: 'ID único da equipe',
        example: 'uuid-da-equipe'
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        description: 'Nome da equipe',
        example: 'Mercedes'
    })
    @Column({ type: 'varchar', length: 100 })
    name: string;

    @ApiProperty({
        description: 'Sede da equipe',
        example: 'Brackley, Reino Unido',
        required: false
    })
    @Column({ type: 'text', nullable: true })
    headquarters: string;

    @ApiProperty({
        description: 'Títulos de construtores',
        example: 8
    })
    @Column({ type: 'numeric', precision: 10, scale: 2, unique: true })
    constructor_titles: number;

    @ApiProperty({
        description: 'Pontos totais da equipe',
        example: 620.5
    })
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    points: number;

    @ApiProperty({
        description: 'Nome do chefe de equipe',
        example: 'Toto Wolff',
        required: false
    })
    @Column({ type: 'varchar', length: 100, nullable: true })
    manager: string;

    @ApiProperty({
        description: 'Data de criação do registro',
        example: '2024-01-01T00:00:00.000Z'
    })
    @CreateDateColumn()
    createdAt: Date;
    
    @ApiProperty({
        description: 'Data da última atualização',
        example: '2024-01-01T00:00:00.000Z'
    })
    @UpdateDateColumn()
    updatedAt: Date;
}