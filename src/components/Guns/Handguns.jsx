import Product from "../Product/Product";
import useProducts from "./useProducts";

import { handgunImages } from "../imageMaps";

export default function Handguns({ cart, setCart }) {

    const products = useProducts("handguns");

    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <Product key={index} product={product} images={handgunImages} />
                    );
                })
            }
        </>
    )
}