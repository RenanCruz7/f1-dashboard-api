import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Polyfill para crypto (necessário para algumas versões do TypeORM)
import { webcrypto } from 'crypto';

if (!global.crypto) {
  // @ts-ignore
  global.crypto = webcrypto;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
