import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import { Outlet } from 'react-router-dom';

import styles from './guns.module.css';

export default function Guns({ cart, setCart }) {

    const props = {
        selected: 1,
        cart: cart,
        setCart: setCart
    };

    return (
        <>
            <Navbar {...props} />
            <div className={styles.main}>
                <Sidebar />
                <section className={styles.products}>
                    <Outlet />
                </section>
            </div>
        </>
    );
}