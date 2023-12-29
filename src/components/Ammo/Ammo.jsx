import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import ammunition from '../../data/dictionaries/ammunition.json';
import { Link } from "react-router-dom";

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
                            <Link key={index} className={styles.product}>
                                <div className={styles.product}>
                                    <div className={styles.image}>
                                        <img src={ammunitionImages[product.filename]} alt="product_image" />
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
            </div>
        </>
    );
} 