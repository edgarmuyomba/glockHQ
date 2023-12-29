import styles from './highlights.module.css';

import highlight1 from '../../assets/highlight1.png';
import highlight2 from '../../assets/highlight2.png';
import highlight3 from '../../assets/highlight3.png';

export default function Highlights() {
    return (
        <section className={styles.highlights}>
            <div className={styles.highlight1}>
                <p className="desc">Air Rifles Guns</p>
                <img src={highlight1} alt="" />
            </div>
            <div className={styles.highlight2}>
                <p className="desc">Hand Grenades</p>
                <img src={highlight2} alt="" />
            </div>
            <div className={styles.highlight3}>
                <p className="desc">Scoped Rifles</p>
                <img src={highlight3} alt="" />
            </div>
        </section>
    );
}