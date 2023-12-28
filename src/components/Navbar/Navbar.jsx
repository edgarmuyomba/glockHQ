import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiMagnify } from "@mdi/js";

import styles from "./styles.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="src/assets/glockHQ.png" alt="Logo" />
                <p>GlockHQ</p>
            </div>
            <ul className={styles.links}>
                <li>
                    <Link to="guns">GUNS</Link>
                </li>
                <li>
                    <Link to="ammo">AMMO</Link>
                </li>
                <li>
                    <Link to="#">ACCESSORIES</Link>
                </li>
                <li>
                    <Link to="#">BLOG</Link>
                </li>
            </ul>
            <ul className={styles.icons}>
                <li>
                    <Link to="cart">
                        <Icon path={mdiCart} size={0.7} color="#a29889" title="Cart" />
                    </Link>
                </li>
                <li>
                    <Icon path={mdiMagnify} size={0.7} color="#a29889" title="Search" />
                </li>
            </ul>
            <div className={styles.contact}>
                <p>CONTACT</p>
            </div>
        </div>
    )
}