import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import type { CreatePilotDTO } from "../dtos/CreatePilotDTO";
import type { UpdatePilotDTO } from "../dtos/UpdatePilotDTO";
import { PilotsService } from "../services/PilotsService";

@Controller('pilots')
export class PilotsController {
    constructor(private readonly pilotsService: PilotsService) {}

    @Get()
    findAll() {
        return this.pilotsService.findAll();
    }

    @Post()
    create(@Body() createPilotDTO: CreatePilotDTO) {
        return this.pilotsService.create(createPilotDTO);
    }
    
    @Get(':id')
    findPilotById(@Param('id') id: string) {
        return this.pilotsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePilotDTO: UpdatePilotDTO) {
        return this.pilotsService.update(id, updatePilotDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pilotsService.remove(id);
    }
}