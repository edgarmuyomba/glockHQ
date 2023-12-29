import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import { useState, useEffect } from "react";
import ammunition from '../../data/dictionaries/ammunition.json';

import styles from './styles.module.css';

import { ammunitionImages } from "../imageMaps";

export default function Ammo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(ammunition)
    }, []);

    return (
        <>
            <Navbar selected={2} />
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