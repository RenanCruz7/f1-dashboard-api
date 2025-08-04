import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pilot, PilotDocument } from '../models/Pilot';
import type { CreatePilotDTO } from '../dtos/CreatePilotDTO';

@Injectable()
export class PilotsService {
  constructor(@InjectModel(Pilot.name) private pilotModel: Model<PilotDocument>) {}

  async create(createPilotDTO: CreatePilotDTO): Promise<PilotDocument> {
    const createdPilot = new this.pilotModel(createPilotDTO);
    return createdPilot.save();
  }

  async findAll(): Promise<PilotDocument[]> {
    return this.pilotModel.find().exec();
  }

  async findOne(id: string): Promise<PilotDocument | null> {
    return this.pilotModel.findById(id).exec();
  }

  async update(id: string, updatePilotDTO: Partial<CreatePilotDTO>): Promise<PilotDocument | null> {
    return this.pilotModel.findByIdAndUpdate(id, updatePilotDTO, { new: true }).exec();
  }

  async remove(id: string): Promise<PilotDocument | null> {
    return this.pilotModel.findByIdAndDelete(id).exec();
  }
}
