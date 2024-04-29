import {describe, expect, it} from 'vitest';

import {ProductsBuyListMock} from '@data/mocks';
// import {ProductsModel} from '@domain/models';
import {AxiosHttpClientInMemory} from '@infrastructure/implementations';

import {ProductsListUseCase} from '..';
import { ProductsBuyModel } from '@domain/models';

type SutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory;
};

function makeSut({
  axiosHttpClientInMemory = new AxiosHttpClientInMemory(),
}: SutParam = {}) {
  const sut = new ProductsListUseCase(axiosHttpClientInMemory);
  return {sut, axiosHttpClientInMemory};
}

describe('PostListUseCase', () => {
  it('Should return method list with correct method and URL', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    axiosHttpClientInMemory.response = {data: ProductsBuyListMock()};

    const {sut} = makeSut({axiosHttpClientInMemory});
    await sut.list();

    expect(axiosHttpClientInMemory.method).toBe('GET');
    expect(axiosHttpClientInMemory.url).toBe(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC'
    );
  });

  it('Should return method list with correct data correct', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    const productsList = ProductsBuyListMock();
    axiosHttpClientInMemory.response = {data: productsList};

    const {sut} = makeSut({axiosHttpClientInMemory});
    const data = await sut.list();
    
    expect(data[0]).toEqual({
        id:productsList.products[0].id ,
        name: productsList.products[0].name ,
        brand: productsList.products[0].brand ,
        description:productsList.products[0].description ,
        photo: productsList.products[0].photo ,
        price: productsList.products[0].price ,
        amount:productsList.products[0].amount,
    } as ProductsBuyModel);

    expect(data[1]).toEqual({
        id:productsList.products[1].id ,
        name: productsList.products[1].name ,
        brand: productsList.products[1].brand ,
        description:productsList.products[1].description ,
        photo: productsList.products[1].photo ,
        price: productsList.products[1].price ,
        amount:productsList.products[1].amount,
    } as ProductsBuyModel);
  });
});