import React from "react";
import styles from './style.module.css';
import Rectangle from '../../assests/images/Rectangle.png';


const NewArival = () => {
    return <section className={styles.newBanner}>
        <div className="">
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className={styles.banner}>
                        <div className="banner-img">
                            <div className="banner-text">
                                <div className={styles.textOverlay}>
                                    <h6>30% OFF  DON’T MISS THIS OPPURTUNITY</h6>
                                    <div className={styles.imgdiv}>
                                        <h2>New<br /> Arrivals<img src={Rectangle} alt='' /></h2>
                                    </div>
                                    <p className={styles.bannerPara} >
                                        Embrace the Artistry of Nature with our Exquisite <br />Wooden Handicrafts Collection!
                                    </p>
                                    <div>
                                        <button className={styles.ovalButtonthree}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </section >
}
export default NewArival;
