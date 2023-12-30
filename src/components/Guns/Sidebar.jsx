import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './sidebar.module.css';

export default function Sidebar() {
    const [selected, setSelected] = useState(1);

    return (
        <aside className={styles.sidebar}>
            <p className={styles.title}>BROWSE ALL PRODUCTS</p>
            <ul className={styles.links}>
                <Link to="handguns" className={selected === 1 ? styles.selected : ''} onClick={() => setSelected(1)}>
                    <li className={styles.link}>
                        <p className="name">Handguns</p> 
                    </li>
                </Link>
                <Link to="rifles" className={selected === 2 ? styles.selected : ''} onClick={() => setSelected(2)}>
                    <li className={styles.link}>
                        <p className="name">Rifles</p>
                    </li>
                </Link>
                <Link to="attachments" className={selected === 3 ? styles.selected : ''} onClick={() => setSelected(3)}>
                    <li className={styles.link}>
                        <p className="name">Attachments</p>
                    </li>
                </Link>
            </ul>
        </aside>
    );
}