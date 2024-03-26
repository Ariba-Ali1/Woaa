import React from "react";
import styles from './style.module.css';
import design1img from '../../assests/images/design-1.png';
import design2img from '../../assests/images/design-2.png';
import design3img from '../../assests/images/design-3.png';

const Section_1 = () => {
    return <>
        <section className="py-5">
            <div className="">
                <div className="row">
                    <div className="col-12">
                        <h2 className={styles.sectionHeading}>Designed By <span>Artists</span>,<br />
                            Made By Us, Just For You.</h2>
                    </div>
                </div>
                <div className={styles.banner}>
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-3">
                        <div className={styles.Maincards}>
                            <img className={styles.Maincardimage} src={design1img} alt='' />
                            <h3 className="my-5">Wooden Kitchen Collection</h3>
                            <a href="#" className={styles.themeButton}>Learn More</a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.Maincards}>
                            <img className={styles.Maincardimage} src={design2img} alt='' />
                            <h3 className="my-5">Wooden Home Decoration</h3>
                            <a href="#" className={styles.themeButton}>Learn More</a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.Maincards}>
                            <img className={styles.Maincardimage} src={design3img} alt="Design 3" style={{ maxWidth: "100%" }} />
                            <h3 className="my-5">Wooden Jewelry Box</h3>
                            <a href="#" className={styles.themeButton}>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
    </>
}
export default Section_1;
