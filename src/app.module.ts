import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PilotsModule } from './modules/pilots/PilotsModule';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/f1-dashboard'),
    PilotsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
