import { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import handguns from '../../data/dictionaries/handguns.json';
import rifles from '../../data/dictionaries/rifles.json';
import attachments from '../../data/dictionaries/attachments.json';

import styles from './styles.module.css';

const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

function getBestSellers() {
  let bestSellers = [];

  for (let i = 0; i < 3; i++) {
    // get the guns
    let index = random(9, 0);
    while (bestSellers.includes(handguns[index])) index = random(9, 0);
    if (handguns[index] !== undefined) bestSellers.push(handguns[index]);
  }

  for (let i = 0; i < 3; i++) {
    // get the rifles
    let index = random(33, 0);
    while (bestSellers.includes(rifles[index])) index = random(33, 0);
    if (rifles[index] !== undefined) bestSellers.push(rifles[index]);
  }

  for (let i = 0; i < 1; i++) {
    // get the attachments
    let index = random(18, 0);
    while (bestSellers.includes(attachments[index])) index = random(18, 0);
    if (attachments[index] !== undefined) bestSellers.push(attachments[index]);
  }

  return bestSellers;
}

function App() {
  const [bestSellers, setBestSellers] = useState([]);
  const sliderRef = useRef(null);
  const scrollAmount = 300;

  useEffect(() => {
    const results = getBestSellers();
    setBestSellers(results);
  }, []);

  return (
    <>
      <Navbar />
      <header>
        <aside>
          <p className={styles.title}>GlockHQ</p>
          <p className={styles.heading}>
            Home to premium weaponry, ammunition and everything Guns
          </p>
          <p className={styles.summary}>
            This is not a real website. Do not try to purchase guns from here.
          </p>
          <button>
            <Link to="guns">SHOP NOW</Link>
          </button>
        </aside>
        <section className={styles.cover}>
          <img src="src/assets/cover_photo.jpg" alt="cover photo" />
          {/* Photo by <a href="https://unsplash.com/@specna_arms_4s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Specna Arms</a> on <a href="https://unsplash.com/photos/man-holding-rifle-ADR-OV5gpQ8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */}
        </section>
      </header>
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
                <p className={styles.category}>{item.Category}</p>
                <p className={styles.name}>{item.Name}</p>
                <p className={styles.price}>${item.Price}</p>
              </div>
            })
          }
        </div>
      </section>
    </>
  )
}

export default App
