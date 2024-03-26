import React from 'react';
import styles from './style.module.css';
import footerLogo from './../../assests/images/waoofooter.png'
import Facebook from './../../assests/images/Fb.png'
import Twitter from './../../assests/images/Twitter.png'
import Instagram from './../../assests/images/Insta.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className="">
                <div className="row">
                    <div className={`col-md-3 ${styles.column1}`}>
                        <img src={footerLogo} alt="" className={`${styles.logo} ${styles.footerLogoRightShift}`} />
                        <p className={styles.logoP}>Crafted with Nature’s <br />
                            Touch, Cherished Forever.</p>
                    </div>
                    <div className={`col-md-2 offset-md-1 ${styles.column}`}>
                        <h3>Quick Links</h3>
                        <ul className={styles.linkList} style={{ listStyleType: 'none' }}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">Kitchen</a></li>
                            <li><a href="/">Jewelry Box</a></li>
                            <li><a href="about">Home Decoration</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className={`col-md-3 ${styles.column2}`}>
                        <h3>Contact Us</h3>
                        <ul className={styles.linkList} style={{ listStyleType: 'none' }}>
                            <li className={styles.listItem}>
                                We accept calls and texts on our phone number, along with email.
                            </li>
                            <li className={styles.listItem}>
                                <FontAwesomeIcon icon={faMapMarker} className={styles.icon} />
                                PO Box 9, PC 100, Muscat, Sultanate of Oman
                            </li>
                            <li className={styles.listItem}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                                info@naranjeehirjee.com
                            </li>
                            <li className={styles.listItem}>
                                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                +968 2478 4842
                            </li>
                        </ul>
                    </div>
                    <div className={`col-md-3 ${styles.column}`}>
                        <div className={styles.socialIcons}>
                            <img src={Facebook} alt="" className='fbLogo' />
                            <img src={Twitter} alt="" className='tLogo' />
                            <img src={Instagram} alt="" className='iLogo' />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-6 $styles.mainCopyRight}`}>
                                <div className={styles.copyright}>
                                    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
