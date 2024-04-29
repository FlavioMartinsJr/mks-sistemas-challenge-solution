import { CartModal } from './cartModal';
import Drawer from '@mui/material/Drawer';
import svgCart from "../../../../assets/img/Vector.svg";
import { useCartContext, useModalContext } from "../contexts";


export function CartButton(){
    const {isOpen,ModalOpen } = useModalContext()
    const {cart } = useCartContext()
    return(
        <div>
            <button  onClick={() => {ModalOpen()}}><img src={svgCart}/>{cart?.length}</button>
            <Drawer
                open={isOpen} 
                onClose={ModalOpen}
                anchor={'right'}
            >
                <CartModal/>
            </Drawer> 
        </div>
        
    );
}