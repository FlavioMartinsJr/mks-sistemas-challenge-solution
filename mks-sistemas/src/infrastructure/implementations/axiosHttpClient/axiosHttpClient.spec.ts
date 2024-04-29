import {describe, expect, it, vi} from 'vitest';
import {AxiosHttpClient} from './axiosHttpClient';
import axios from 'axios';
import {ProductsListMock} from '../../../data/mocks/';

function makeSut() {
  const sut = new AxiosHttpClient();
  return {sut};
}

describe('AxiosHttpClient', () => {
  it('Should return method body and URL correct', async () => {
    const axiosMocked = vi
      .spyOn(axios, 'request')
      .mockResolvedValueOnce({data: []});

    const {sut} = makeSut();

    await sut.request({
      method: 'GET',
      url: 'http://localhost',
      body: {
        name: 'Esse é o meu titulo',
      },
    });

    expect(axiosMocked).toHaveBeenCalledWith({
    method: 'GET',
      url: 'http://localhost',
      data: {
        name: 'Esse é o meu titulo',
      },
    });
  });

  it('Should return request with correct data', async () => {
    const dataMock = ProductsListMock();

    vi.spyOn(axios, 'request').mockResolvedValueOnce({
      data: dataMock,
    });

    const {sut} = makeSut();

    const response = await sut.request({
      method: 'GET',
      url: 'http://localhost',
    });

    expect(response.data).toEqual(dataMock);
  });
});