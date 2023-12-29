import Product from "../Product/Product";
import useProducts from "./useProducts";

import { attachmentImages } from "../imageMaps";

export default function Attachments({ cart, setCart }) {
    
    const products = useProducts("attachments");
    
    return (
        <>
            {
                products.map((product, index) => {
                    
                    let props = {
                        cart: cart,
                        setCart: setCart,
                        product: product,
                        images: attachmentImages
                    }

                    return (
                        <Product key={index} {...props} />
                    );
                })
            }
        </>
    );
}