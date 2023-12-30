import Navbar from "../Navbar/Navbar";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from './styles.module.css';

import handguns from '../../data/dictionaries/handguns.json';
import rifles from '../../data/dictionaries/rifles.json';
import attachments from '../../data/dictionaries/attachments.json';
import ammunitions from '../../data/dictionaries/ammunition.json';

import { handgunImages, rifleImages, attachmentImages, ammunitionImages } from "../imageMaps";

export default function ProductDetail({ cart, setCart }) {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null);
    const [damage, setDamage] = useState([]);
    const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(0);

    let props = {
        cart: cart,
        setCart: setCart
    };

    const findProductById = (id) => {
        if (id < 10) {
            // handgun
            for (let handgun of handguns) {
                if (handgun.id == id) {
                    setImage(handgunImages[handgun.filename]);
                    setDamage(damageBlocks(handgun.Damage));
                    return handgun;
                }
            }
            return null;
        } else if (id < 43) {
            // rifle
            for (let rifle of rifles) {
                if (rifle.id == id) {
                    setImage(rifleImages[rifle.filename]);
                    setDamage(damageBlocks(rifle.Damage));
                    return rifle;
                }
            }
            return null;
        } else if (id < 61) {
            // attachment
            for (let attachment of attachments) {
                if (attachment.id == id) {
                    setImage(attachmentImages[attachment.filename]);
                    setDamage(damageBlocks(attachment.Damage));
                    return attachment;
                }
            }
            return null;
        } else if (id < 74) {
            // ammunition
            for (let ammunition of ammunitions) {
                if (ammunition.id == id) {
                    setImage(ammunitionImages[ammunition.filename]);
                    setDamage(damageBlocks(ammunition.Damage));
                    return ammunition;
                }
            }
            return null;
        } else return null;
    }

    const damageBlocks = (value) => {
        let blocks = [];
        for (let i = 0; i < value; i++) {
            blocks.push(
                <div className={styles.block}></div>
            )
        }
        return blocks;
    }

    const inCart = () => {
        // check if product is in the cart
        for (let item of cart) {
            if (item.id == id) {
                setSelected(true);
                setCount(item.count);
            }
        }
    }

    const handleCount = (operation, product) => {
        let _cart = cart;
        if (operation === "add") {
            if (count < 99) {
                const item = _cart.find((item) => item.id === product.id);

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

    useEffect(() => {
        let prod = findProductById(id);
        if (prod) {
            setProduct((product) => prod);
            inCart();
            setLoading(false);
        }
        else <Navigate to='/' />
    }, []);

    if (loading) {
        return (
            <>
                <Navbar {...props} />
                <div className={styles.main}>
                    <div className="loading"></div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Navbar {...props} />
                <div className={styles.main}>
                    <section className={styles.image}>
                        <img src={image} alt="product_image" />
                    </section>
                    <section className={styles.details}>
                        <p className={styles.category}>
                            <Link to={`/guns/${product.Category.toLowerCase()}s`}>
                                {product.Category}
                            </Link>
                        </p>
                        <p className={styles.name}>{product.Name}</p>
                        <p className={styles.price}>${product.Price}</p>
                        <div className={styles.damage}>
                            {
                                damage.map((block) => block)
                            }
                        </div>
                        <div className={styles.description}>
                            <p className={styles.description}>{product.Description}</p>
                        </div>
                        <div className={styles.buttons}>
                            {
                                selected
                                    ? (
                                        // product count
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
                                        }}>
                                            Add to Cart
                                        </button>
                                    )
                            }
                        </div>
                    </section>
                </div>
            </>
        );
    }
}