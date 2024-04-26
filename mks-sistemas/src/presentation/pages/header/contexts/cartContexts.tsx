import { ProductsModel } from "@domain/models";
import { createContext,useContext,useState } from "react";

type CartContextData = {
    cart:ProductsModel[] | [];
    AddCart:(product: ProductsModel) => void;
    RemoveCart:(product : ProductsModel) => void;
    RemoveAllCart:() => void;
    CountCart:() => number;
    FullPriceCart:() => number;
};

interface Props {
    children?: React.ReactNode;
  }

const CartContext = createContext({} as CartContextData);

export const CartProvider: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<ProductsModel[]>([]);

    const AddCart = (product: ProductsModel) => {
        cart.push(product);
        setCart(cart);
    };

    const RemoveCart = (product : ProductsModel) => {
        const indice = cart.indexOf(product);
        if (indice > -1) {
            cart.splice(indice, 1);
          }
    };  

    const RemoveAllCart = () => {
        const newCart: ProductsModel[] = [];
        setCart(newCart);
    };

    const FullPriceCart = () => {
        let fullPrice = 0;
        cart.map((product) => (
            fullPrice = fullPrice + parseFloat(product.price)
        ));
        console.log("total: R$"+fullPrice)
        return fullPrice
    };

    const CountCart = () => {
        return cart.length;
    };

    return(
        <CartContext.Provider value={{cart,AddCart,FullPriceCart,RemoveCart,RemoveAllCart,CountCart}}>
            <>
                {children}
            </>
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
    const context = useContext(CartContext);
    return context;
}