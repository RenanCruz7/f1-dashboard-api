import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateTeamDTO } from "../dtos/CreateTeamDTO";
import { UpdateTeamDTO } from "../dtos/UpdateTeamDTO";
import { TeamsService } from "../services/TeamsService";

@ApiTags('teams')
@Controller('teams')
export class TeamController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get()
    @ApiOperation({
        summary: 'Listar todas as equipes',
        description: 'Retorna uma lista com todas as equipes cadastradas'
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de equipes retornada com sucesso'
    })
    findAll() {
        return this.teamsService.findAll();
    }

    @Post()
    @ApiOperation({
        summary: 'Criar uma nova equipe',
        description: 'Cria uma nova equipe com os dados fornecidos'
    })
    @ApiResponse({
        status: 201,
        description: 'Equipe criada com sucesso'
    })
    @ApiResponse({
        status: 400,
        description: 'Dados inválidos fornecidos'
    })
    @ApiBody({ type: CreateTeamDTO })
    create(@Body() createTeamDTO: CreateTeamDTO) {
        return this.teamsService.create(createTeamDTO);
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Buscar equipe por ID',
        description: 'Retorna uma equipe específica baseada no ID fornecido'
    })
    @ApiParam({
        name: 'id',
        description: 'ID único da equipe',
        example: 'uuid-da-equipe'
    })
    @ApiResponse({
        status: 200,
        description: 'Equipe encontrada com sucesso'
    })
    @ApiResponse({
        status: 404,
        description: 'Equipe não encontrada'
    })
    findTeamById(@Param('id') id: string) {
        return this.teamsService.findById(id);
    }

    @Put(':id')
    @ApiOperation({
        summary: 'Atualizar equipe',
        description: 'Atualiza os dados de uma equipe existente'
    })
    @ApiParam({
        name: 'id',
        description: 'ID único da equipe',
        example: 'uuid-da-equipe'
    })
    @ApiResponse({
        status: 200,
        description: 'Equipe atualizada com sucesso'
    })
    @ApiResponse({
        status: 404,
        description: 'Equipe não encontrada'
    })
    @ApiBody({ type: UpdateTeamDTO })
    update(@Param('id') id: string, @Body() updateTeamDTO: UpdateTeamDTO) {
        return this.teamsService.update(id, updateTeamDTO);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Remover equipe',
        description: 'Remove uma equipe do sistema'
    })
    @ApiParam({
        name: 'id',
        description: 'ID único da equipe',
        example: 'uuid-da-equipe'
    })
    @ApiResponse({
        status: 200,
        description: 'Equipe removida com sucesso'
    })
    @ApiResponse({
        status: 404,
        description: 'Equipe não encontrada'
    })
    remove(@Param('id') id: string) {
        return this.teamsService.delete(id);
    }
}