import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePilotDTO {
    @ApiPropertyOptional({
        description: 'Nome completo do piloto',
        example: 'Lewis Hamilton',
        minLength: 2,
        maxLength: 100
    })
    name?: string;

    @ApiPropertyOptional({
        description: 'Idade do piloto',
        example: 39,
        minimum: 18,
        maximum: 50
    })
    age?: number;

    @ApiPropertyOptional({
        description: 'Nome da equipe atual',
        example: 'Mercedes',
        maxLength: 50
    })
    team?: string;

    @ApiPropertyOptional({
        description: 'Número de vitórias',
        example: 103,
        minimum: 0
    })
    wins?: number;

    @ApiPropertyOptional({
        description: 'Número de pódios',
        example: 197,
        minimum: 0
    })
    podiums?: number;
}