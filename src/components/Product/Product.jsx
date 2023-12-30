import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './product.module.css';

export default function Product({ product, images, cart, setCart }) {

    const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const item = cart.find((item) => item.id === product.id);

        if (item) {
            setSelected(true);
            setCount(item.count);
        }

    }, []);

    const handleCount = (operation, product) => {
        let _cart = cart;
        if (operation === "add") {
            if (count < 99) {
                // const item = _cart.find((item) => item.id === product.id);
                const item = _cart.includes(product);

                if (item) {
                    item.count++;
                } else {
                    _cart.push({ id: product.id, category: product.Category, count: 1 });
                }
                setCount((count) => count + 1);
            }
        } else if (operation === "sub") {
            const item = _cart.find((item) => item.id === product.id);
            if (count > 1) {
                item.count--;
                setCount((count) => count - 1);
            } else {
                let index = _cart.indexOf(item);
                _cart.splice(index, 1);
                setSelected(false);
                setCount(1);
            }
        }
        // don't know why navbar cannot see that _cart is now empty. this is the only working solution
        setCart((cart) => (_cart.length > 0 ? _cart : []));
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={images[product.filename]} alt="product_image" />
            </div>
            <footer className={styles.details}>
                <Link to={`/product/${product.id}`} className={styles.product}>
                    <p className={styles.name}>{product.Name}</p>
                </Link>
                <p className={styles.category}>{product.Category}</p>
                <p className={styles.price}>${product.Price}</p>
                {
                    selected
                        ? ( // cart logic also here
                            <div className={styles.count}>
                                <button className={styles.sub} onClick={() => handleCount("sub", product)}>
                                    -
                                </button>
                                {count}
                                <button className={styles.plus} onClick={() => handleCount("add", product)}>
                                    +
                                </button>
                            </div>
                        )
                        : (
                            <button className={styles.add} onClick={() => {
                                setCart((cart) => [...cart, { id: product.id, category: product.Category, count: 1 }]);
                                setSelected(true);
                            }
                            }>
                                Add to cart
                            </button>
                        )
                }
            </footer>
        </div>
    );
}