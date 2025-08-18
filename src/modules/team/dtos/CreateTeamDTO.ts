import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTeamDTO {
    @ApiProperty({
        description: 'Nome da equipe',
        example: 'Mercedes',
        minLength: 2,
        maxLength: 100
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiPropertyOptional({
        description: 'Sede da equipe',
        example: 'Brackley, Reino Unido',
        maxLength: 100
    })
    @IsOptional()
    @IsString()
    headquarters?: string;

    @ApiProperty({
        description: 'Títulos de construtores',
        example: 8,
        minimum: 0
    })
    @IsNotEmpty()
    @IsNumber()
    constructor_titles: number;

    @ApiProperty({
        description: 'Pontos totais da equipe',
        example: 620.5,
        minimum: 0
    })
    @IsNotEmpty()
    @IsNumber()
    points: number;

    @ApiPropertyOptional({
        description: 'Nome do chefe de equipe',
        example: 'Toto Wolff',
        maxLength: 100
    })
    @IsOptional()
    @IsString()
    manager?: string;
}
