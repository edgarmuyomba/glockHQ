import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import { useState, useEffect } from "react";
import ammunition from '../../data/dictionaries/ammunition.json';

import styles from './styles.module.css';

import { ammunitionImages } from "../imageMaps";

export default function Ammo({ cart, setCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(ammunition)
    }, []);

    const props = {
        selected: 2,
        cart: cart, 
        setCart: setCart
    }

    return (
        <>
            <Navbar {...props} />
            <div className={styles.main}>
                {
                    products.map((product, index) => {
                        return (
                            <Product key={index} product={product} images={ammunitionImages} />
                        );
                    })
                }
            </div>
        </>
    );
} 