import { ProductsBuyModel } from '@domain/models';
import CloseIcon from '../../../../assets/img/Close_cart.svg';
import { useCartContext } from '../contexts';

type Props = {
    product: ProductsBuyModel;
    index:number;
};

export function CartModalItem({product, index}: Props) {
    const { RemoveCart, DecreaseAmountCart,IncreaseAmountCart} = useCartContext()

    return(
        <div className='item'>
            
            <div className='item-photo'>
                <img className="item-photo-img" src={product.photo} width={160} height={145} alt='asfsa' />
            </div>
            
            <div className='item-information'>
                <div className='item-information-tittle'>
                    <h4>{product.name}</h4>
                </div>
            </div>   

            <div className='item-amoust'>
                <p className='qtd'>Qtd:</p>
                <div className="item-amoust-button">
                    <button onClick={() => {DecreaseAmountCart(product)}} className="item-amoust-button-decrease">-</button>
                    |<p> {product.amount} </p>|
                    <button onClick={() => {IncreaseAmountCart(product)}} className="item-amoust-button-increase">+</button>
                </div>
            </div>

            <div className='item-total'>
                <h3>R${Math.trunc(product.price) * product.amount}</h3>
            </div>

            <img onClick={() => {RemoveCart(index)}} className='item-closed icon-closed' src={CloseIcon}/>
        </div>  
    );
}