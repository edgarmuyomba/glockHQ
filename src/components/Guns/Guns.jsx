import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import { Outlet } from 'react-router-dom';

import styles from './guns.module.css';

export default function Guns() {
    return (
        <>
            <Navbar selected={1} />
            <div className={styles.main}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}