import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('pilots')
export class Pilot {
  @ApiProperty({
    description: 'ID único do piloto',
    example: 'uuid-do-piloto'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Nome completo do piloto',
    example: 'Lewis Hamilton'
  })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({
    description: 'Idade do piloto',
    example: 39
  })
  @Column({ type: 'int' })
  age: number;

  @ApiProperty({
    description: 'Nome da equipe atual',
    example: 'Mercedes'
  })
  @Column({ type: 'varchar', length: 50 })
  team: string;

  @ApiProperty({
    description: 'Número de vitórias',
    example: 103
  })
  @Column({ type: 'int', default: 0 })
  wins: number;

  @ApiProperty({
    description: 'Número de pódios',
    example: 197
  })
  @Column({ type: 'int', default: 0 })
  podiums: number;

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
