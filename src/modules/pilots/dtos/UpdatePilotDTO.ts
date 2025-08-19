import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';

export class UpdatePilotDTO {
    @ApiPropertyOptional({
        description: 'Nome completo do piloto',
        example: 'Lewis Hamilton',
        minLength: 2,
        maxLength: 100
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({
        description: 'Idade do piloto',
        example: 39,
        minimum: 18,
        maximum: 50
    })
    @IsOptional()
    @IsNumber()
    @Min(18)
    @Max(50)
    age?: number;

    @ApiPropertyOptional({
        description: 'Nome da equipe atual',
        example: 'Mercedes',
        maxLength: 50
    })
    @IsOptional()
    @IsString()
    team?: string;

    @ApiPropertyOptional({
        description: 'Número de vitórias',
        example: 103,
        minimum: 0
    })
    @IsOptional()
    @IsNumber()
    wins?: number;

    @ApiPropertyOptional({
        description: 'Número de pódios',
        example: 197,
        minimum: 0
    })
    @IsOptional()
    @IsNumber()
    podiums?: number;
}