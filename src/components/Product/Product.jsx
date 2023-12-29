import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './product.module.css';

export default function Product({ product, images }) {

    const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(1);

    const handleCount = (operation) => {
        if (operation === "add") {
            if (count < 99) setCount((count) => count + 1);
        } else if (operation === "sub") {
            if (count > 1) {
                setCount((count) => count - 1);
            } else {
                setSelected(false);
            }
        }
    }

    return (
        <Link className={styles.product}>
            <div className={styles.product}>
                <div className={styles.image}>
                    <img src={images[product.filename]} alt="product_image" />
                </div>
                <footer className={styles.details}>
                    <p className={styles.name}>{product.Name}</p>
                    <p className={styles.category}>{product.Category}</p>
                    <p className={styles.price}>${product.Price}</p>
                    {
                        selected
                            ? ( // cart logic also here
                                <div className={styles.count}>
                                    <button className={styles.sub} onClick={() => handleCount("sub")}>
                                        -
                                    </button>
                                    {count}
                                    <button className={styles.plus} onClick={() => handleCount("add")}>
                                        +
                                    </button>
                                </div>
                            )
                            : (
                                <button className={styles.add} onClick={() => setSelected(true)}>
                                    Add to cart
                                </button>
                            )
                    }
                </footer>
            </div>
        </Link>
    );
}