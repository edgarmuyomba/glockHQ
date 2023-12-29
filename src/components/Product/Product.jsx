import { Link } from 'react-router-dom';

import styles from './product.module.css';

export default function Product({ product, images }) {
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
                </footer>
            </div>
        </Link>
    );
}