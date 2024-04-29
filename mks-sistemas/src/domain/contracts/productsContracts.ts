import { ProductsBuyModel } from '@domain/models';

export interface IProductsList {
    list(): Promise<IProductsList.Model>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IProductsList{
    export type Model = ProductsBuyModel[];
}