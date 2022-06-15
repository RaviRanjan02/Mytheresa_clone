import React from 'react'
import styles from "../components/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.Mytheresa_Navbar_Main}>
        <div className={styles.Mytheresa_Navbar_Right}>
        <div>WOMEN</div>
        <div>MEN</div>
        <div>KIDS</div>
        <div>LIFE</div>
        </div>
        <div className={styles.Mytheresa_Navbar_left}>
        <div>Signup for Newsletter</div>
        <div>My account</div>
        <div>My wishlist</div>
        <div>India | English</div>
        </div>

    </div>
  )
}

export default Navbar