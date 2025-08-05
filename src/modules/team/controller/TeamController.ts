import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('teams')
export class TeamController {

    @Get()
    findAll(){
        return
    }

    @Post()
    create(){
        return
    }

    @Get(':id')
    findTeamById(){
        return
    }

    @Put(':id')
    update(){
        return
    }

    @Delete(':id')
    remove(){
        return 
    }
}