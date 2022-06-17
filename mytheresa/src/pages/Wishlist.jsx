import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import MytheresaLogo from '../components/MytheresaLogo'
import Navbar from '../components/Navbar'
import styles from "../pages/Wishlist.module.css"

const Wishlist = () => {
  return (
    <div className={styles.Wishlist_Main}>
        <Navbar/>
        <MytheresaLogo/>
        <Categories/>
        <hr></hr>
        <div className={styles.Wishlist_Items_layout_main}>
          <div className={styles.Wishlist_Items_layout_left}>
            <div>FILTER BY</div>
            <div></div>
            </div>  
          <div className={styles.Wishlist_Items_layout_Right}>
            </div>  
        </div>
        <Footer/>
    </div>
  )
}

export default Wishlist