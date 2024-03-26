import React from "react";
import styles from './style.module.css';
import featured1 from '../../assests/images/Featured-Product-1.png'
import featured2 from '../../assests/images/Featured-Product-2.png'
import featured3 from '../../assests/images/Featured-Product-3.png'
import featured4 from '../../assests/images/Featured-Product-4.png'

const Featured = () => {
    return <>
        <section className={styles.collection_Wrapper}>
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-10">
                        <h2 class={styles.sectionHeading2}>Our<span>Featured </span>Products<br /></h2>
                        <p class={styles.sectionHeading1}>Explore our trendiest collections and find the perfect visual.</p>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={featured1} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                            <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={featured2} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                            <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={featured3} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                            <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={featured4} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                            <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    </>
}
export default Featured;
