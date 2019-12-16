import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BooksModule } from './books/books.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Books management')
    .setVersion('0.0.1')
    .addTag('books')
    .build();
  const bookDocument = SwaggerModule.createDocument(app, options, {include: [BooksModule]});
  SwaggerModule.setup('api', app, bookDocument);
  await app.listen(3000);
}
bootstrap();
