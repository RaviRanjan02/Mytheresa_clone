import React from "react";
import Slider from "react-slick";
import styles from "../components/SliderImageWomen.module.css";
import { Link } from "react-router-dom";

const LifeNewArrival = () => {
  const life = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={styles.SliderImage_main}>
      <h1 className={styles.SliderIamge_title}>Life New Arrivals</h1>
      <div className={styles.Slider_Elments_Main}>
        <Slider {...life}>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/80/P00679382.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a9/P00679380.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d7/P00679215.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1b/P00679151.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/12/P00679369.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/76/P00679384.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/50/P00678878.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/57/P00679220.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/cc/P00679374.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/dc/P00678063.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
          <div className={styles.Slider_Elements_Main_cont}>
            <div>
              <div className={styles.Slider_Elments_Main_Image}>
                <img
                  src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/18/P00678182.jpg"
                  alt=""
                />
              </div>
              <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
            </div>
          </div>
        </Slider>
      </div>
      <Link to="/life"><div className={styles.Slider_elments_view_all}><button>View All</button></div></Link>
    </div>
  );
};

export default LifeNewArrival;
