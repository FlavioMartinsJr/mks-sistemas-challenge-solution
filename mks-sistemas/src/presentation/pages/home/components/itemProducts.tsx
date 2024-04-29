import { ProductsBuyModel } from '@domain/models';
import svgBoxBuy from '../../../../assets/img/shopping-bag.svg';
import { useCartContext } from "../../header/contexts";

type Props = {
    product: ProductsBuyModel;
};

export function ItemProducts({product}: Props) {

    const {AddCart } = useCartContext()

    return (
        <div className='item'>
            
            <div className='item-photo'>
                <img className="item-photo-img" src={product.photo} width={160} height={145} alt={product.photo} />
            </div>
            
            <div className='item-information'>
                <div className='item-information-left'>
                    <h4>{product.name}</h4>
                </div>
                <div className='item-information-right'>
                    <button>R${Math.trunc(product.price)}</button>
                </div>
            </div>   

            <div className='item-descrition'>
                <p>{product.description}</p>
            </div>

            <div className='item-button'>
                <button onClick={() => {AddCart(product)}}><img src={svgBoxBuy}/>comprar</button>
            </div>

        </div>
    );
}