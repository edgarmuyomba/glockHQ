import useProducts from "./useProducts";
import { Link } from "react-router-dom";

import styles from './categories.module.css';

import { handgunImages } from "./imageMaps";

export default function Handguns() {

    const products = useProducts("handguns");

    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <Link key={index} className={styles.product}>
                            <div className={styles.product}>
                                <div className={styles.image}>
                                    <img src={handgunImages[product.filename]} alt="product_image" />
                                </div>
                                <footer className={styles.details}>
                                    <p className={styles.name}>{product.Name}</p>
                                    <p className={styles.category}>{product.Category}</p>
                                    <p className={styles.price}>${product.Price}</p>
                                </footer>
                            </div>
                        </Link>
                    );
                })
            }
        </>
    )
}