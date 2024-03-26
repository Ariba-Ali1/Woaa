import React from "react";
import styles from './style.module.css';
import logoImage from '../../assests/images/waoo-logo.png';
import cartImage from '../../assests/images/Group2.png';



const navLinks = [
    {
        display: 'Home',
        url: '#'
    },

    {
        display: 'Shop',
        url: '#'
    },

    {
        display: 'Kitchen',
        url: '#'
    },

    {
        display: 'Jewelry Box',
        url: '#'
    },
    {
        display: 'Home Decoration',
        url: '#'
    },
    {
        display: 'Contact Us',
        url: '#'
    }
]

const Header = () => {
    return <section className="first-sec">

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="navigation">
                        <div className="logo-wrapper">
                            <img src={logoImage} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className="nav">
                        <div className={styles.navMenu}>
                            <ul className={styles.navList}>
                                {
                                    navLinks.map((items, index) => (
                                        <li key={index} className="nav__items">
                                            <a href={items.url}>{items.display}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className={styles.cartIcon}>
                        <img src={cartImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>            
    </section>




}
export default Header;
