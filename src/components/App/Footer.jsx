import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiTwitter, mdiFacebook, mdiInstagram, mdiLinkedin } from '@mdi/js';

import glockHQ from '../../assets/glockHQ.png';

import styles from './footer.module.css';

export default function Footer() {
    return ( 
        <section className={styles.footer}>
            <aside className={styles.footerAside}>
                <div className="logo">
                    <img src={glockHQ} alt="Logo" />
                    <Link to="/">GlockHQ</Link>
                </div>
                <p className={styles.copy}>Copyright &copy; 2023</p>
                <a className={styles.author} href="https://github.com/edgarmuyomba" target='_blank'>Edgar Muyomba</a>
            </aside>
            <section className={styles.links}>
                <p>Home</p>
                <p>Privacy policy</p>
                <p>Contact us</p>
                <p>How we work</p>
                <p>Deliveries</p>
            </section>
            <section className={styles.socials}>
                <Icon path={mdiTwitter} size={0.8} color="greenyellow"></Icon>
                <Icon path={mdiInstagram} size={0.8} color="greenyellow"></Icon>
                <Icon path={mdiFacebook} size={0.8} color="greenyellow"></Icon>
                <Icon path={mdiLinkedin} size={0.8} color="greenyellow"></Icon>
            </section>
        </section>
    );
}