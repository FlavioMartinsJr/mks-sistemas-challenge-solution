import { CartModal } from './cartModal';
import Drawer from '@mui/material/Drawer';
import svgCart from "../../../../assets/img/Vector.svg";
import { useModalContext } from "../contexts";

type Props = {
    item: number;
};

export function CartButton({item}: Props){
    const {isOpen,ModalOpen } = useModalContext()
    return(
        <div>
            <button onClick={() => {ModalOpen()}}><img src={svgCart}/>{item}</button>
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