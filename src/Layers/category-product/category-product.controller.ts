import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryProductService } from './category-product.service';
import { CreateCategoryProductDto } from './dto/create-category-product.dto';
import { UpdateCategoryProductDto } from './dto/update-category-product.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { categoryId } from './constant';

@Controller('category-product')
export class CategoryProductController {
  constructor(
    private readonly categoryProductService: CategoryProductService,
  ) {}

  @Post('')
  @ApiBody({ type: CreateCategoryProductDto })
  create(@Body() createCategoryProductDto: CreateCategoryProductDto) {
    return this.categoryProductService.create(createCategoryProductDto);
  }

  @Get(`:${categoryId}`)
  @ApiParam({ name: categoryId, required: false })
  findOne(@Param(categoryId) id: string) {
    if (!+id) return this.categoryProductService.findAll();

    return this.categoryProductService.findOne(+id);
  }

  @Patch(`:${categoryId}`)
  update(
    @Param(categoryId) categoryId: string,
    @Body() updateCategoryProductDto: UpdateCategoryProductDto,
  ) {
    return this.categoryProductService.update(
      +categoryId,
      updateCategoryProductDto,
    );
  }

  @Delete(`:${categoryId}`)
  remove(@Param(categoryId) categoryId: string) {
    return this.categoryProductService.remove(+categoryId);
  }
}
