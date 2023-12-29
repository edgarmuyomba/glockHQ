import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import styles from './bestsellers.module.css';

export default function Bestsellers({ bestSellers }) {
  const sliderRef = useRef(null);

    return (
        <section className={styles.bestSellers}>
        <div className={styles.navbar}>
          <p className="title">BESTSELLERS</p>
          <ul>
            <li onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
            }}>
              <Icon path={mdiChevronLeft} size={1.5} color="#a29889" />
            </li>
            <li onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
            }}>
              <Icon path={mdiChevronRight} size={1.5} color="#a29889" />
            </li>
          </ul>
          <Link to="guns">SEE ALL PRODUCTS</Link>
        </div>
        <div className={styles.imageSlider} ref={sliderRef}>
          {
            bestSellers.map((item, index) => {
              return <div className={styles.item} key={index}>
                <div className="image">
                  <img src={`src/data/images/${item.Category}/${item.filename}`} alt="" />
                </div>
                <Link to={`guns/${item.Category.toLowerCase()}s`} className={styles.category}>{item.Category}</Link>
                <Link>
                  <p className={styles.name}>{item.Name}</p>
                </Link>
                <p className={styles.price}>${item.Price}</p>
              </div>
            })
          }
        </div>
      </section>
    )

}