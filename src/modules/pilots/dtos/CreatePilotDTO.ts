import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

    @ApiProperty({
        description: 'Nome completo do piloto',
        example: 'Lewis Hamilton',
        minLength: 2,
        maxLength: 100
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Idade do piloto',
        example: 39,
        minimum: 18,
        maximum: 50
    })
    @IsNotEmpty()
    @IsNumber()
    @Min(18)
    @Max(50)
    age: number;

    @ApiProperty({
        description: 'Nome da equipe atual',
        example: 'Mercedes',
        maxLength: 50
    })
    @IsNotEmpty()
    @IsString()
    team: string;

    @ApiPropertyOptional({
        description: 'Número de vitórias',
        example: 103,
        minimum: 0,
        default: 0
    })
    @IsOptional()
    @IsNumber()
    wins?: number;

    @ApiPropertyOptional({
        description: 'Número de pódios',
        example: 197,
        minimum: 0,
        default: 0
    })
    @IsOptional()
    @IsNumber()
    podiums?: number;
}