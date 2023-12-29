import Product from "../Product/Product";
import useProducts from "./useProducts";

import { rifleImages } from "../imageMaps";

export default function Rifles({ cart, setCart }) {

    const products = useProducts("rifles");
    
    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <Product key={index} product={product} images={rifleImages} />
                    );
                })
            }
        </>
    );
}   