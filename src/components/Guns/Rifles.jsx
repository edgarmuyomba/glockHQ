import Product from "../Product/Product";
import useProducts from "./useProducts";

import { rifleImages } from "../imageMaps";

export default function Rifles({ cart, setCart }) {

    const products = useProducts("rifles");
    
    return (
        <>
            {
                products.map((product, index) => {
                    
                    let props = {
                        cart: cart,
                        setCart: setCart,
                        product: product,
                        images: rifleImages
                    }

                    return (
                        <Product key={index} {...props} />
                    );
                })
            }
        </>
    );
}   