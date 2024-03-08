import { Module } from '@nestjs/common';
import { CategoryProductService } from './category-product.service';
import { CategoryProductController } from './category-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryProduct } from './entities/category-product.entity';

@Module({
  controllers: [CategoryProductController],
  providers: [CategoryProductService],
  imports: [TypeOrmModule.forFeature([CategoryProduct])],
})
export class CategoryProductModule {}
