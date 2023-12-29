import Product from "../Product/Product";
import useProducts from "./useProducts";

import { attachmentImages } from "../imageMaps";

export default function Attachments() {
    
    const products = useProducts("attachments");
    
    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <Product key={index} product={product} images={attachmentImages} />
                    );
                })
            }
        </>
    );
}