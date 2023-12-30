import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import useImages from './useImages';
import Bestsellers from './Bestsellers';
import Highlights from './Highlights';
import Footer from './Footer';

import coverPhoto from '../../assets/cover_photo.jpg';

import styles from './app.module.css';

 
function App({ cart, setCart }) {

  const { images: bestSellers, loading: loadingBest, error: errorBest } = useImages('bestsellers');

  const props = {
    cart: cart,
    setCart: setCart
  };

  return ( 
    <>
      <Navbar {...props} />
      <header>
        <aside className={styles.homeAside}>
          <p className={styles.title}>GlockHQ</p>
          <p className={styles.heading}>
            Home to premium weaponry, ammunition and everything Guns
          </p>
          <p className={styles.summary}>
            This is not a real website. Do not try to purchase guns from here.
          </p>
          <button className={styles.guns}>
            <Link to="guns">SHOP NOW</Link>
          </button>
        </aside>
        <section className={styles.cover}>
          <img src={coverPhoto} alt="cover photo" />
          {/* Photo by <a href="https://unsplash.com/@specna_arms_4s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Specna Arms</a> on <a href="https://unsplash.com/photos/man-holding-rifle-ADR-OV5gpQ8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */}
        </section>
      </header>
      <Bestsellers bestSellers={bestSellers} />
      <Highlights />
      <Footer />
    </>
  )
}

export default App
