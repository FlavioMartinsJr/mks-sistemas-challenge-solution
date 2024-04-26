import { useQuery} from "@tanstack/react-query";
import { IProductsList } from '@domain/contracts';
import {ItemProducts , ItemProductsSkeleton} from '../components'

type Props = {
    productsListUseCase: IProductsList;
};

export function ItemProductsHook({productsListUseCase}: Props) {
   
    const {data, isLoading, isError} = useQuery({
        queryKey: ['products', 'list'],
        queryFn: async () => {
                const data = await productsListUseCase.list()
                return data
            }
        }
    );
    
    if (isError) {
        return <div className="content-error"><h3>Ops... Parece que algo deu errado, tente recarregar a pagina porfavor !</h3></div>;
    }

    return (
        <div>
            {
                isLoading ? 
                (
                    <section className='content-items'>
                        {/* so ajustar a key do map */}
                        {Array.from(new Array(8))?.map(() => (<ItemProductsSkeleton />))}
                    </section>
                )  
                : 
                (
                    <section className='content-items'>
                        {data?.map((product) => (<ItemProducts key={product.id} product={product} />))}
                    </section>
                    
                )
            }
        </div>
    );
}