import React from "react";
import styles from "../components/SliderImageWomen.module.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SliderImageWomen = () => {
  const womens = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={styles.SliderImage_main}>
      <h1 className={styles.SliderIamge_title}>Women's New Arrivals</h1>
      <div className={styles.Slider_Elments_Main}>
      <Slider {...womens}>
        <div className={styles.Slider_Elements_Main_cont}>
          <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/05/P00695994.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/58/P00712066.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/bb/P00667534.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/22/P00688141.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/8f/P00696036.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/49/P00694350.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/34/P00693113.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/62/P00692683.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d6/P00703341.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2c/P00693107.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2a/P00695976.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/74/P00694869.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b4/P00701292.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2b/P00672469.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/97/P00703595.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6b/P00666584.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/93/P00705351.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/10/P00695486.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c2/P00695906.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/bc/P00709877.jpg" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>STELLA MCCARTNEY</div>
            <div className={styles.Slider_Elments_Main_Price}>$1005</div>
          </div>
        </div>
      </Slider>
      </div>
      <Link to="/women"><div className={styles.Slider_elments_view_all}><button>View All</button></div></Link>
    </div>
  );
};

export default SliderImageWomen;
