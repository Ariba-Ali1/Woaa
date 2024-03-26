import React from "react";
import styles from './style.module.css'
import bottomBorder from '../../assests/images/Rectangle.png'
import craftImg from '../../assests/images/bannerImage1.png'


const Banner = () => {
    return <div className={styles.bannerWrapper}>
        <section className="">
            {/* <> */}
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className={styles.banner}>
                        <div className="banner-img">
                            {/* <img src={} alt="Banner" className="banner-img"/> */}
                            <div className={styles.bannerText}>
                                <div className={styles.textOverlay}>
                                    <h6 style={{ fontFamily: 'Poppins,sans-serif', color: '#999999', fontWeight: '700', fontSize: '20px' }}>THE BEST IN THE MARKET</h6>
                                    <h1 style={{ position: 'relative', display: 'block', color: 'black', fontFamily: 'Poppins, sans-serif', fontWeight: '750', fontSize: '90px', textShadow: '2px 2px 4px #000000' }}>
                                        Crafting <br />Timeless <br />Treasures!
                                        <img src={bottomBorder} alt='' className='bottom-Img' style={{ position: 'absolute', top: '50', left: '0' }} />
                                    </h1>

                                    <p className={styles.bannrPara} >
                                        Embrace the Artistry of Nature with our Exquisite <br />Wooden Handicrafts Collection!
                                    </p>
                                    <div>
                                        <button className={styles.ovalButton1}>Shop Now  </button>
                                        <button className={styles.ovalButton2}>See Products</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className="crafting-Img">
                        <img src={craftImg} alt='' className="" />
                    </div>
                </div>

            </div>
            {/* </container-fluid> */}
        </section >

    </div >

}

export default Banner;

