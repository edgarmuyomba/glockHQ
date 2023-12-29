import Product from "../Product/Product";
import useProducts from "./useProducts";

import { handgunImages } from "../imageMaps";

export default function Handguns({ cart, setCart }) {

    const products = useProducts("handguns");

    return (
        <>
            {
                products.map((product, index) => {
                    
                    let props = {
                        cart: cart,
                        setCart: setCart,
                        product: product,
                        images: handgunImages
                    }

                    return (
                        <Product key={index} {...props} />
                    );
                })
            }
        </>
    )
}