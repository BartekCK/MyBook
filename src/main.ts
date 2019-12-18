import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BooksModule } from './books/books.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Books management')
    .setVersion('0.0.1')
    .addTag('books')
    .build();
  const document = SwaggerModule.createDocument(app, options, {include: [BooksModule]});
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
