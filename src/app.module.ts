import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { AppController } from './app.controller';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
