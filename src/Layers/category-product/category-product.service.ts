import { Injectable } from '@nestjs/common';
import { CreateCategoryProductDto } from './dto/create-category-product.dto';
import { UpdateCategoryProductDto } from './dto/update-category-product.dto';
import { CategoryProduct } from './entities/category-product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { omit } from 'src/Common/Objects';

@Injectable()
export class CategoryProductService {
  constructor(
    @InjectRepository(CategoryProduct)
    private readonly categoryRepository: Repository<CategoryProduct>,
  ) {}

  create(createCategoryProductDto: CreateCategoryProductDto) {
    return this.categoryRepository.save(omit(createCategoryProductDto, ['id']));
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(categoryId: number) {
    return this.categoryRepository.findOne({
      where: {
        categoryId,
      },
    });
  }

  update(id: number, updateCategoryProductDto: UpdateCategoryProductDto) {
    return this.categoryRepository.update(
      id,
      omit(updateCategoryProductDto, ['id']),
    );
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
