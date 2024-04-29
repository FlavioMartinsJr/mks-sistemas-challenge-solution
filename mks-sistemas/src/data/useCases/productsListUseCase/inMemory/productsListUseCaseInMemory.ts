import {IProductsList} from '../../../../domain/contracts/';
import {ProductsBuyListMock} from '../../../mocks/';

export class ProductListUseCaseInMemory implements IProductsList {
  async list(): Promise<IProductsList.Model> {
    const productList = ProductsBuyListMock()
    return await Promise.resolve(productList.products);
  }
}