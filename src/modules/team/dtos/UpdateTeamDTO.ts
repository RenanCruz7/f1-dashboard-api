import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTeamDTO {
    @ApiPropertyOptional({
        description: 'Nome da equipe',
        example: 'Mercedes',
        minLength: 2,
        maxLength: 100
    })
    name?: string;

    @ApiPropertyOptional({
        description: 'Sede da equipe',
        example: 'Brackley, Reino Unido',
        maxLength: 100
    })
    headquarters?: string;

    @ApiPropertyOptional({
        description: 'Títulos de construtores',
        example: 8,
        minimum: 0
    })
    constructor_titles?: number;

    @ApiPropertyOptional({
        description: 'Pontos totais da equipe',
        example: 620.5,
        minimum: 0
    })
    points?: number;

    @ApiPropertyOptional({
        description: 'Nome do chefe de equipe',
        example: 'Toto Wolff',
        maxLength: 100
    })
    manager?: string;
    }
