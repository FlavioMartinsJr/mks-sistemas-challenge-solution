import { ProductsModel } from '@domain/models';
import CloseIcon from '../../../../assets/img/Close_cart.svg';
import { useCartContext } from '../contexts';

type Props = {
    product: ProductsModel;
};

export function CartModalItem({product}: Props) {
    const { CountCart,RemoveCart} = useCartContext()

    return(
        <div className='item'>
            
            <div className='item-photo'>
                <img className="item-photo-img" src={product.photo} width={160} height={145} alt='asfsa' />
            </div>
            
            <div className='item-information'>
                <div className='item-information-tittle'>
                    <h4>{product.brand}</h4>
                </div>
            </div>   

            <div className='item-amoust'>
                <p>Qtd:</p>
                <div className="item-amoust-button">
                    <button className="item-amoust-button-decrease">-</button>
                    |<p> 1 </p>|
                    <button className="item-amoust-button-increase">+</button>
                </div>
            </div>

            <div className='item-total'>
                <h3>R${parseFloat(product.price)}</h3>
            </div>

            <img onClick={() => {console.log(CountCart()),RemoveCart(product),console.log(CountCart())}} className='item-closed icon-closed' src={CloseIcon}/>
        </div>  
    );
}