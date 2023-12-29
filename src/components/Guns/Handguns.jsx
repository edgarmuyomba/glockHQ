import useProducts from "./useProducts";
import { Link } from "react-router-dom";

import styles from './handguns.module.css';

import DesertEagle from '../../data/images/Handgun/Item_Weapon_DesertEagle_C_h.png';
import G18 from '../../data/images/Handgun/Item_Weapon_G18_C_h.png';
import M1911 from '../../data/images/Handgun/Item_Weapon_M1911_C_h.png';
import M79 from '../../data/images/Handgun/Item_Weapon_M79_C.png';
import M9 from '../../data/images/Handgun/Item_Weapon_M9_C_h.png';
import NagantM1895 from '../../data/images/Handgun/Item_Weapon_NagantM1895_C_h.png';
import Rhino from '../../data/images/Handgun/Item_Weapon_Rhino_C_h.png';
import Sawnoff from '../../data/images/Handgun/Item_Weapon_Sawnoff_C_h.png';
import vz61Skorpion from '../../data/images/Handgun/Item_Weapon_vz61Skorpion_C_h.png';

export default function Handguns() {

    const imageMap = {
        'Item_Weapon_DesertEagle_C_h.png': DesertEagle,
        'Item_Weapon_G18_C_h.png': G18,
        'Item_Weapon_M1911_C_h.png': M1911,
        'Item_Weapon_M79_C.png': M79,
        'Item_Weapon_M9_C_h.png': M9,
        'Item_Weapon_NagantM1895_C_h.png': NagantM1895,
        'Item_Weapon_Rhino_C_h.png': Rhino,
        'Item_Weapon_Sawnoff_C_h.png': Sawnoff,
        'Item_Weapon_vz61Skorpion_C_h.png': vz61Skorpion,
    }

    const products = useProducts("handguns");

    return (
        <>
            {
                products.map((product, index) => {

                    return (
                        <Link key={index} className={styles.product}>
                            <div className={styles.product}>
                                <div className={styles.image}>
                                    <img src={imageMap[product.filename]} alt="product_image" />
                                </div>
                                <footer className={styles.details}>
                                    <p className={styles.name}>{product.Name}</p>
                                    <p className={styles.category}>{product.Category}</p>
                                    <p className={styles.price}>${product.Price}</p>
                                </footer>
                            </div>
                        </Link>
                    );
                })
            }
        </>
    )
}