import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
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
    
    @Get()
    findPilotById(){
        return 'This action return one pilot by his ID'
    }
}