import { CartButton  } from "../components"

type Props = {
    newItem:number;
}

export function CartButtonHooks({newItem} : Props){

    return(
        <CartButton item={newItem}/>  
    );
}