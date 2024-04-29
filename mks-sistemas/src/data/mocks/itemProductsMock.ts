import {ProductsModel, ProductsBuyModel} from '@domain/models';

export function ProductsListMock(): {products:ProductsModel[]}{
  return {products:
        [
            {
                id: 1,
                name: "Iphone 11 128 GB",
                brand: "Apple",
                description:"Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
                photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
                price: 5000,
            },
            {
                id: 2,
                name: "AirPods",
                brand: "Apple",
                description:"Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
                photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
                price: 1200,
            },
        ]
    }
}

export function ProductsBuyListMock(): {products:ProductsBuyModel[]} {
  return {products:
        [
        {
            id: 1,
            name: "Iphone 11 128 GB",
            brand: "Apple",
            description:"Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            price: 5000,
            amount:1,
        },
        {
            id: 2,
            name: "AirPods",
            brand: "Apple",
            description:"Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
            price: 1200,
            amount:1,
        },
        ]
    }
}