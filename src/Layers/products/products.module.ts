import { Products } from './entities/product.entity';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryProductService } from '../category-product/category-product.service';
import { CategoryProduct } from '../category-product/entities/category-product.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, CategoryProductService],
  imports: [TypeOrmModule.forFeature([Products, CategoryProduct])],
})
export class ProductsModule {}
