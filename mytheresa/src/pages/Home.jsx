import React from 'react'
import KidsImageSlider from '../components/KidsImageSlider'
import LifeNewArrival from '../components/LifeNewArrival'
import SliderImageMens from '../components/SliderImageMens'
import SliderImageWomen from '../components/SliderImageWomen'
import styles from "../pages/Home.module.css"


const Home = () => {
  return (
    <div className={styles.Mytheresa_Home_Main}>
    <div className={styles.Mytheresa_Home_Men_Women_main}>
        <div className={styles.Mytheresa_Home_Women}>
            <img src="https://user-images.githubusercontent.com/91020498/173836524-4bf3c0d1-4513-439a-a37d-f983a3b79df4.png" alt="" />
            <h1 className={styles.Mytheresa_Home_Women_title}>WOMEN</h1>
        </div>
        <div className={styles.Mytheresa_Home_Men}>
            <img src="https://user-images.githubusercontent.com/91020498/173836563-fea886a1-dcb8-4b7c-a342-c769fe479273.png" alt="" />
            <h1 className={styles.Mytheresa_Home_Women_title}>MEN</h1>
        </div>
    </div>
    <div className={styles.Mytheresa_Home_Kids_Main}>
    <div className={styles.Mytheresa_Home_Kids}>
            <img src="https://img.mytheresa.com/media/static/raw/cms/l/GP_kids/FEB-Gatepage_KW_desktop_2x_20220218113700.jpg?imwidth=1180&imdensity=1" alt="" />
            <h1 className={styles.Mytheresa_Home_Women_title}>KID'S</h1>
        </div>
    </div>
        <div className={styles.Mytheresa_Home_Life_Main}>
        <div className={styles.Mytheresa_Home_Life}>
            <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/MAY-Gatepage_Life_desktop_2x_20220513093741.jpg?imwidth=1180&imdensity=1" alt="" />
            <h1 className={styles.Mytheresa_Home_Women_title}>LIFE</h1>
        </div>
        </div>
        <SliderImageWomen/>
        <SliderImageMens/>
        <KidsImageSlider/>
        <LifeNewArrival/>

    </div>
  )
}

export default Home