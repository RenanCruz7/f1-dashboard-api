import { Body, Controller, Get, Post } from "@nestjs/common";
import type { CreatePilotDTO } from "../dtos/CreatePilotDTO";

@Controller('pilots')
export class PilotsController {
    @Get()
    findAll(): string{
        return 'this action return all pilots'
    }
    @Post()
    create(@Body() createPilotDTO: CreatePilotDTO){
        return createPilotDTO
    }
}