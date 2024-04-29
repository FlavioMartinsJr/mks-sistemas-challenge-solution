import CloseIcon from '../../../../assets/img/Close_cart.svg';
import { useCartContext } from '../contexts';
import { CartModalItem } from './cartModalItem';

export function CartModal(){
    const {cart, RemoveAllCart,FullPriceCart} = useCartContext()
    return(
        <header className="header-navbar-modal">
            <section className="modal-top">
                <div className="modal-tittle">
                    <h1>Carrinho de compras</h1>
                </div>
                <div className="modal-icon-closed">
                    <img className='icon-closed-big icon-closed' src={CloseIcon}/>
                </div>
            </section>
            

            <section className="modal-body">
                {cart?.map((product,index) => (<CartModalItem key={index} product={product}index={index} />))}
            </section>

            <section className="modal-total">
                <div className='modal-total-left'>
                    <h2>Total:</h2>
                </div>
                <div className='modal-total-right'>
                    <h2>R${FullPriceCart()}</h2>
                </div>   
            </section>

            <section className="modal-end">
                <button onClick={() => {RemoveAllCart()}}>Finalizar Compra</button>
            </section>

        </header>
    );
}