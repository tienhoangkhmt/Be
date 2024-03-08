import { CategoryProductModule } from 'src/Layers/category-product/category-product.module';
import { ProductsModule } from 'src/Layers/products/products.module';
import { TaskModule } from 'src/Layers/task/task.module';

const ModuleGroups = [ProductsModule, CategoryProductModule, TaskModule];

export default ModuleGroups;
