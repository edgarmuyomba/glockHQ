import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import useImages from './useImages';
import Bestsellers from './Bestsellers';
import Highlights from './Highlights';

import styles from './app.module.css';


function App() {

  const { images: bestSellers, loading: loadingBest, error: errorBest } = useImages('bestsellers');

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
      <Bestsellers bestSellers={bestSellers} />
      <Highlights />
    </>
  )
}

export default App
