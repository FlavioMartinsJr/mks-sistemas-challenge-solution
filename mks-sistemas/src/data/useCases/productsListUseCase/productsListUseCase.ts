import { IProductsList} from '@domain/contracts';
import { ProductsModel} from '@domain/models';
import { IHttpClient } from '@infrastructure/contracts';
import { productsModelAdapter } from '../adapter/productsModelAdapter';

const baseURL = import.meta.env.VITE_API_MKSChallengeAPI

export class ProductsListUseCase implements IProductsList {

    constructor(private readonly httpClient: IHttpClient<{products:ProductsModel[]}>){}

    async list(): Promise<IProductsList.Model> {
        const {data}  = await this.httpClient.request({
            method: 'GET',
            url: baseURL+'products?page=1&rows=10&sortBy=id&orderBy=ASC'
        });

        return data.products.map(productsModelAdapter.toProductsModel);
    }
}

