import React from 'react'
import styles from "../components/Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Mytheresa_Navbar_Main}>
        <div className={styles.Mytheresa_Navbar_Right}>
      <Link to="/women"><div>WOMEN</div></Link>  
        <Link to="/men"><div>MEN</div></Link>
       <Link to="/kids"><div>KIDS</div></Link> 
       <Link to="/life"><div>LIFE</div></Link> 
        </div>
        <div className={styles.Mytheresa_Navbar_left}>
        <div>Signup for Newsletter</div>
       <Link to="/signin"><div>My account</div></Link> 
       <Link to="/wishlist"><div>My wishlist</div></Link> 
        <div>India | English</div>
        </div>

    </div>
  )
}

export default Navbar