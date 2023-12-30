import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiArrowLeftThin } from '@mdi/js';

import handguns from '../../data/dictionaries/handguns.json';
import rifles from '../../data/dictionaries/rifles.json';
import attachments from '../../data/dictionaries/attachments.json';
import ammunitions from '../../data/dictionaries/ammunition.json';

import { handgunImages, rifleImages, attachmentImages, ammunitionImages } from "../imageMaps";

export default function Cart({ cart, setCart }) {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const handleCount = (operation, product) => {
        let _cart = [...cart];
        if (operation === 'add') {
            if (product.quantity < 99) {
                let item = _cart.find((_item) => _item.id === product.id);
                if (item) {
                    item.count++;
                }
            }
        } else if (operation === 'sub') {
            let item = _cart.find((_item) => _item.id === product.id);
            if (item.count > 1) {
                item.count--;
            } else {
                let index = _cart.indexOf(item);
                _cart.splice(index, 1);
            }
        }
        setCart((cart) => (_cart.length > 0 ? _cart : []));
    }

    const remove = (product) => {
        let _cart = [...cart];

        let item = _cart.find((item) => item.id === product.id);
        let index = _cart.indexOf(item);
        _cart.splice(index, 1);

        setCart(_cart);
    }

    useEffect(() => {
        let totalAmount = 0;
        let updatedItems = [];

        for (let _item of cart) {
            if (_item.category === 'Handgun') {
                // handguns
                for (let handgun of handguns) {
                    if (handgun.id == _item.id) {
                        let item = {
                            id: _item.id,
                            image: handgunImages[handgun.filename],
                            name: handgun.Name,
                            category: handgun.Category,
                            quantity: _item.count,
                            price: handgun.Price,
                            total: _item.count * handgun.Price
                        };
                        totalAmount += item.total;
                        updatedItems.push(item)
                    }
                }
            } else if (_item.category === 'Rifle') {
                // rifles
                for (let rifle of rifles) {
                    if (rifle.id == _item.id) {
                        let item = {
                            id: _item.id,
                            image: rifleImages[rifle.filename],
                            name: rifle.Name,
                            category: rifle.Category,
                            quantity: _item.count,
                            price: rifle.Price,
                            total: _item.count * rifle.Price
                        };
                        totalAmount += item.total;
                        updatedItems.push(item)
                    }
                }
            } else if (_item.category === 'Attachment') {
                // attachments
                for (let attachment of attachments) {
                    if (attachment.id == _item.id) {
                        let item = {
                            id: _item.id,
                            image: attachmentImages[attachment.filename],
                            name: attachment.Name,
                            category: attachment.Category,
                            quantity: _item.count,
                            price: attachment.Price,
                            total: _item.count * attachment.Price
                        };
                        totalAmount += item.total;
                        updatedItems.push(item)
                    }
                }
            } else if (_item.category === 'Ammunition') {
                // ammunition
                for (let ammunition of ammunitions) {
                    if (ammunition.id == _item.id) {
                        let item = {
                            id: _item.id,
                            image: ammunitionImages[ammunition.filename],
                            name: ammunition.Name,
                            category: ammunition.Category,
                            quantity: _item.count,
                            price: ammunition.Price,
                            total: _item.count * ammunition.Price
                        };
                        totalAmount += item.total;
                        updatedItems.push(item)
                    }
                }
            }
        }
        setItems(updatedItems);
        setTotal(totalAmount);
    }, [cart]);

    return (
        <div className={styles.main}>
            <section className={styles.items}>
                <header className={styles.cartHeader}>
                    <p className={styles.title}>Shopping Cart</p>
                    <p className={styles.count}>{cart.length} Items</p>
                </header>
                <div className={styles.table}>
                    <div className={styles.tableHead}>
                        <p>Product details</p>
                        <p>Quantity</p>
                        <p>Price</p>
                        <p>Total</p>
                    </div>
                    <div className={styles.tableBody}>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index} className={styles.item}>
                                        <div className={styles.pDetails}>
                                            <p className={styles.image}>
                                                <img src={item.image} alt="" />
                                            </p>
                                            <div className={styles.actions}>
                                                <ul>
                                                    <li>{item.name}</li>
                                                    <li>{item.category}</li>
                                                    <li onClick={() => remove(item)}>Remove</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.count}>
                                                <p className={styles.sub} onClick={() => handleCount("sub", item)}>
                                                    -
                                                </p>
                                                <p className={styles.qty}>{item.quantity}</p>
                                                <p className={styles.plus} onClick={() => handleCount("add", item)}>
                                                    +
                                                </p>
                                            </div>
                                        </div>
                                        <p>${item.price}</p>
                                        <p>${item.total.toFixed(2)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.continue}>
                    <Link to='/guns'>
                        <Icon path={mdiArrowLeftThin} size={1} />
                        Continue Shopping
                    </Link>
                </div>
            </section>
            <section className={styles.receipt}>
                <header className={styles.cartHeader}>
                    <p className={styles.title}>Order Summary</p>
                </header>
                <div className={styles.details}>
                    <div className={styles.totalCost}>
                        <p className={styles.items}>ITEMS {cart.length}</p>
                        <p className={styles.value}>${total.toFixed(2)}</p>
                    </div>
                    <div className={styles.shipping}>
                        <p>SHIPPING</p>
                        <div className={styles.dropdown}>
                            <p>Standard Delivery - $5.00</p>
                            <Icon path={mdiChevronDown} size={1} />
                        </div>
                    </div>
                </div>
                <div className={styles.checkout}>
                    <div className={styles.totalCost}>
                        <p className={styles.items}>TOTAL COST</p>
                        <p className={styles.value}>${(total + 5).toFixed(2)}</p>
                    </div>
                    <button>CHECKOUT</button>
                </div>
            </section>
        </div>
    );
}