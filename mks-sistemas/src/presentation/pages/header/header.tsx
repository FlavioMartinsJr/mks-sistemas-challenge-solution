import { CartButtonHooks } from "./hooks";
import './header.scss';

export function Header(){

    return(
        <section className='header-navbar'>
            
            <div className='header-navbar-left'>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </div>

            <div className='header-navbar-right'>
                <CartButtonHooks />          
            </div>
                  
        </section>
    );
}