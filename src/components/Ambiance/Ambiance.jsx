import React from "react";
import styles from './style.module.css';
import Ambiance1 from '../../assests/images/Ambiance-1.png'
import Ambiance2 from '../../assests/images/Ambiance-2.png'
import Ambiance3 from '../../assests/images/Ambiance-3.png'
import Ambiance4 from '../../assests/images/Ambiance-4.png'

const Ambiance = () => {
    return <>
        <section className={styles.collectionWrapper}>
            {/* <div className="container"> */}
            <div className="row">
                <div className="col-12">
                    <h2 class={styles.sectionHeading2}>Experience Our <span>Ambiance </span><br /></h2>
                    <p class={styles.sectionHeading1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="col-lg-3">
                    <div className={styles.mainCard1}>
                        <img className={styles.mainCardsImage1} src={Ambiance1} alt='' />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className={styles.mainCard2}>
                        <img className={styles.mainCardsImage2} src={Ambiance2} alt='' />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className={styles.mainCard3}>
                        <img className={styles.mainCardsImage3} src={Ambiance3} alt='' />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className={styles.mainCard4}>
                        <img className={styles.mainCardsImage4} src={Ambiance4} alt='' />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    </>
}
export default Ambiance;
