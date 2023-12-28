import styles from './highlights.module.css';

export default function Highlights() {
    return (
        <section className={styles.highlights}>
            <div className={styles.highlight1}>
                <p className="desc">Air Rifles Guns</p>
                <img src="src/assets/highlight1.png" alt="" />
            </div>
            <div className={styles.highlight2}>
                <p className="desc">Hand Grenades</p>
                <img src="src/assets/highlight2.png" alt="" />
            </div>
            <div className={styles.highlight3}>
                <p className="desc">Scoped Rifles</p>
                <img src="src/assets/highlight3.png" alt="" />
            </div>
        </section>
    );
}