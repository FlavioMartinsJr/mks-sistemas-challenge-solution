import { ProductsBuyModel } from "@domain/models";
import { createContext,useContext,useState } from "react";

type CartContextData = {
    cart:ProductsBuyModel[] | [];
    AddCart:(product: ProductsBuyModel) => void;
    RemoveCart:(id : number) => void;
    RemoveAllCart:() => void;
    DecreaseAmountCart:(product: ProductsBuyModel) => void;
    IncreaseAmountCart:(product: ProductsBuyModel) => void;
    FullPriceCart:() => number;
};

interface Props {
    children?: React.ReactNode;
  }

const CartContext = createContext({} as CartContextData);

export const CartProvider: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<ProductsBuyModel[]>([]);

    function ProductAlreadyExist(product: ProductsBuyModel){
        const element = cart.find(products => products == product);
        if(element == undefined){
            return false;
        }
        return true;
    }

    function IncreaseQuantityProduct(product: ProductsBuyModel){
        product.amount += 1;
        return product;
    }

    function DecreaseQuantityProduct(product: ProductsBuyModel){
        if(product.amount > 0){
            product.amount -= 1;
        }
        return product;
    }

    const IncreaseAmountCart = (product: ProductsBuyModel) => {
        const newCart: ProductsBuyModel[] = [];
        cart.map((productCart) => {
            if(productCart.id == product.id){
                productCart = IncreaseQuantityProduct(productCart)
            }
        });
        cart.map((productCart) => newCart.push(productCart));
        setCart(newCart);
    }

    const DecreaseAmountCart = (product: ProductsBuyModel) => {
        const newCart: ProductsBuyModel[] = [];
        cart.map((productCart) => {
            if(productCart.id == product.id){
                productCart = DecreaseQuantityProduct(productCart)
            }
        });
        cart.map((productCart) => newCart.push(productCart));
        setCart(newCart);
    }

    const AddCart = (product: ProductsBuyModel) => {
        if(ProductAlreadyExist(product)){
            IncreaseAmountCart(product)
            return true;
        }

        const newCart: ProductsBuyModel[] = [];
        cart.map((product) => newCart.push(product));
        newCart.push(product);
        setCart(newCart);
    };

    const RemoveCart = (id : number) => {
        const newCart: ProductsBuyModel[] = [];
        cart.splice(id,1);
        cart.map((product) => newCart.push(product));
        setCart(newCart);
    };  

    const RemoveAllCart = () => {
        const newCart: ProductsBuyModel[] = [];
        setCart(newCart);
    };

    const FullPriceCart = () => {
        let fullPrice = 0;
        cart.map((product) => {
            fullPrice = fullPrice + (Math.trunc(product.price) * product.amount);
        });
        return fullPrice;
    };

    return(
        <CartContext.Provider value={{cart,AddCart,IncreaseAmountCart,DecreaseAmountCart,FullPriceCart,RemoveCart,RemoveAllCart}}>
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