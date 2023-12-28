import styles from './highlights.module.css';

export default function Highlights() {
    return (
        <section className={styles.highlights}>
            <div className="highlight1">
                <img src="src/assets/highlight1.png" alt="" />
            </div>
            <div className={styles.highlight2}>
                <img src="src/assets/highlight2.png" alt="" />
            </div>
            <div className={styles.highlight3}>
                <img src="src/assets/highlight3.png" alt="" />
            </div>
        </section>
    );
}