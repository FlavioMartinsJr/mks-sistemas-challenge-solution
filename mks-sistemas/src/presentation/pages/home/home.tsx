import { IProductsList } from '@domain/contracts';
import { ItemProductsHook } from './hooks';
import './home.scss';

type Props = {
    productsListUseCase: IProductsList;
};

export function Home({productsListUseCase}: Props) {
    return (
        
        <section className='content'>

            <ItemProductsHook productsListUseCase={productsListUseCase}/>
            
        </section>  
    );
}