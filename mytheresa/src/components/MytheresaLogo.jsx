import React from 'react'
import styles from "../components/Mytheresa.module.css"
import {HiOutlineShoppingBag} from "react-icons/hi"

const MytheresaLogo = () => {
  return (
    <div className={styles.Mytheresa_logo_with_shoppping_cart_Main}>
    <div className={styles.Mytheresa_logo}>
    <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220614T171237" alt="" />
    </div>
    <div className={styles.Mytheresa_Shopping_cart}>
    <div>SHOPPING BAG</div>
    <div className={styles.Mytheresa_Shopping_cart_logo}><HiOutlineShoppingBag/></div>
    </div>
    </div>
  )
}

export default MytheresaLogo