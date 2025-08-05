import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PilotsModule } from './modules/pilots/PilotsModule';
import { Pilot } from './modules/pilots/models/Pilot.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Pilot],
        synchronize: true, // Apenas para desenvolvimento! Em produção use migrations
      }),
      inject: [ConfigService],
    }),
    PilotsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
