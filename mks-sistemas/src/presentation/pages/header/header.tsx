import { CartButtonHooks } from "./hooks";
import './header.scss';
import { useCartContext } from "./contexts";

export function Header(){

    const { CountCart} = useCartContext()

    return(
        <section className='header-navbar'>
            
            <div className='header-navbar-left'>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </div>

            <div className='header-navbar-right'>
                <CartButtonHooks newItem={CountCart()} />          
            </div>
                  
        </section>
    );
}