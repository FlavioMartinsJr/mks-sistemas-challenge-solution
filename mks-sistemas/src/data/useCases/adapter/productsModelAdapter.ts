import {ProductsBuyModel, ProductsModel} from '@domain/models';

function toProductsModel(productsBuy: ProductsModel): ProductsBuyModel {
  return {
    id: productsBuy.id,
    name: productsBuy.name,
    brand: productsBuy.brand,
    description: productsBuy.description,
    photo: productsBuy.photo,
    price: productsBuy.price,
    amount: 1,
  };
}

export const productsModelAdapter = {toProductsModel};