import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do ValidationPipe com opções melhoradas
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos não definidos no DTO
    transform: true, // Transforma dados conforme os tipos nos DTOs
    forbidNonWhitelisted: true, // Rejeita requisições com campos não definidos
    transformOptions: {
      enableImplicitConversion: true // Converte tipos automaticamente quando possível
    }
  }));

  // Aplicar filtro global de exceções
  app.useGlobalFilters(new HttpExceptionFilter());

  // Aplicar interceptor de transformação
  app.useGlobalInterceptors(new TransformInterceptor());

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('F1 Dashboard API')
    .setDescription('API para gerenciamento de dados de pilotos de Fórmula 1')
    .setVersion('1.0')
    .addTag('pilots', 'Operações relacionadas aos pilotos')
    .addTag('teams', 'Operações relacionadas às equipes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  
  console.log(`🚀 Application is running on: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 Swagger documentation: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
