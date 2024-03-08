import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { Products } from './entities/product.entity';
import { otherCategory } from './constants';
import { HTTPS_STATUS } from 'src/Configs/https';
import { Response } from 'express';
import { isRequired, notFound } from 'src/Common/Error';
import { ENDPOINT_PRODUCTS } from './endpoint';
import { CategoryProductService } from '../category-product/category-product.service';

@Controller(ENDPOINT_PRODUCTS.CHILDREN)
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoryProductService: CategoryProductService,
  ) {}

  @Post()
  @ApiBody({ type: CreateProductDto })
  async create(@Body() createProductDto: CreateProductDto): Promise<Products> {
    if (!createProductDto?.categoryId) {
      createProductDto = {
        ...createProductDto,
        categoryId: otherCategory,
      };
    }
    return this.productsService.create(createProductDto);
  }

  @Get(ENDPOINT_PRODUCTS.CHILD.LIST.get)
  @ApiQuery({ name: 'id', required: false })
  findAll(@Query('id') id: string) {
    if (+id) return this.productsService.findOne(+id);

    return this.productsService.findAll();
  }

  @Patch(ENDPOINT_PRODUCTS.CHILD.LIST.patch)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(ENDPOINT_PRODUCTS.CHILD.LIST.delete)
  async remove(@Param('id') id: string, @Res() res: Response) {
    const rs = await this.findAll(id);

    if (+id && !rs) {
      res.status(HTTPS_STATUS.NOT_FOUND).send(notFound);
      throw new Error(notFound);
    }

    if (!+id) {
      res.status(HTTPS_STATUS.BAD_REQUEST).send(isRequired('id'));
      throw new Error(isRequired('id'));
    }
    return this.productsService.remove(+id);
  }
}
