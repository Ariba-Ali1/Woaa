import React from "react";
import styles from './style.module.css';
import productImg1 from '../../assests/images/Product-1.png'
import productImg2 from '../../assests/images/Product-2.png'
import productImg3 from '../../assests/images/Product-3.png'
import productImg4 from '../../assests/images/Product-4.png'

const Product = () => {
    return <>
        <section className={styles.collection_Wrapper}>
            <div className="">
                <div className="row">
                    <div className="col-10">
                        <h2 className={styles.sectionHeading}>Trending<span> Collections</span> To<br /> Boost Your Ideas</h2>
                        <p className={styles.collectPara}>Explore our trendiest collections and find the perfect visual.</p>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}> 
                            <img className={styles.mainCardsImage} src={productImg1} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                                <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={productImg2} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                                <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={productImg3} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                                <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.mainCard}>
                            <img className={styles.mainCardsImage} src={productImg4} alt='' />
                            <h6 className="my-2">Product Name Here</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit aenean euismod.</p>
                                <button className={styles.ovalButton}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Product;
