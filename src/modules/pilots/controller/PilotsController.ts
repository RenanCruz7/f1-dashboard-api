import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';
import { CreatePilotDTO } from "../dtos/CreatePilotDTO";
import { UpdatePilotDTO } from "../dtos/UpdatePilotDTO";
import { PilotsService } from "../services/PilotsService";

@ApiTags('pilots')
@Controller('pilots')
export class PilotsController {
    constructor(private readonly pilotsService: PilotsService) {}

    @Get()
    @ApiOperation({ 
        summary: 'Listar todos os pilotos',
        description: 'Retorna uma lista com todos os pilotos cadastrados'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Lista de pilotos retornada com sucesso'
    })
    @ApiQuery({
        name: 'team',
        required: false,
        description: 'Filtrar pilotos por equipe',
        example: 'Mercedes'
    })
    findAll(@Query('team') team?: string) {
        if (team) {
            return this.pilotsService.findByTeam(team);
        }
        return this.pilotsService.findAll();
    }

    @Post()
    @ApiOperation({ 
        summary: 'Criar um novo piloto',
        description: 'Cria um novo piloto com os dados fornecidos'
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Piloto criado com sucesso'
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Dados inválidos fornecidos'
    })
    @ApiBody({ type: CreatePilotDTO })
    create(@Body() createPilotDTO: CreatePilotDTO) {
        return this.pilotsService.create(createPilotDTO);
    }
    
    @Get(':id')
    @ApiOperation({ 
        summary: 'Buscar piloto por ID',
        description: 'Retorna um piloto específico baseado no ID fornecido'
    })
    @ApiParam({
        name: 'id',
        description: 'ID único do piloto',
        example: 'uuid-do-piloto'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Piloto encontrado com sucesso'
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Piloto não encontrado'
    })
    findPilotById(@Param('id') id: string) {
        return this.pilotsService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ 
        summary: 'Atualizar piloto',
        description: 'Atualiza os dados de um piloto existente'
    })
    @ApiParam({
        name: 'id',
        description: 'ID único do piloto',
        example: 'uuid-do-piloto'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Piloto atualizado com sucesso'
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Piloto não encontrado'
    })
    @ApiBody({ type: UpdatePilotDTO })
    update(@Param('id') id: string, @Body() updatePilotDTO: UpdatePilotDTO) {
        return this.pilotsService.update(id, updatePilotDTO);
    }

    @Delete(':id')
    @ApiOperation({ 
        summary: 'Remover piloto',
        description: 'Remove um piloto do sistema'
    })
    @ApiParam({
        name: 'id',
        description: 'ID único do piloto',
        example: 'uuid-do-piloto'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Piloto removido com sucesso'
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Piloto não encontrado'
    })
    remove(@Param('id') id: string) {
        return this.pilotsService.remove(id);
    }
}