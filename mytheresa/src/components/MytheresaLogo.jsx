import React from 'react'
import styles from "../components/Mytheresa.module.css"
// import {HiOutlineShoppingBag} from "react-icons/hi"

const MytheresaLogo = () => {
  return (
    <div className={styles.Mytheresa_logo_with_shoppping_cart_Main}>
    <div className={styles.Mytheresa_logo}>
    <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220614T171237" alt="" />
    </div>
    <div className={styles.Mytheresa_Shopping_cart}>
    <div className={styles.Mytheresa_Shopping_cart_Shopping_bag_title}>SHOPPING BAG</div>
    <div className={styles.Mytheresa_Shopping_cart_logo}><img src="data:image/svg+xml;charset%3DUS-ASCII,%3Csvg%20baseProfile%3D%22tiny%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-20%200%2090.5%20100%22%3E%3Cpath%20d%3D%22M-14.4%2095.4h78.7c.8%200%201.5-.1%201.7-1%20.1-.7-.1-1.6-.1-2.3-.1-2.3-.3-4.7-.4-7l-1.2-21c-.3-6.4-.7-12.7-1-19.1-.1-1.3%200-2.8-.2-4.1-.1-.3-.1-.5-.3-.7-.7-.8-2.7-.4-3.6-.4h-69.7c-.7%200-1.6%200-1.9.8-.2.5-.1%201.4-.1%201.9-.1%202.2-.3%204.4-.4%206.6l-1.2%2021c-.4%206.4-.7%2012.9-1.1%2019.3l-.3%204.5c0%20.4%200%20.7.2%201%20.2.3.6.5.9.5zm0%204.4c-2.2%200-4.2-1.3-5.1-3.2-1-2.2-.3-5.3-.2-7.6.9-15%201.7-30%202.6-45%20.1-2.2-.1-4.6%201.3-6.4%201.1-1.5%202.9-2.2%204.7-2.3%2012.2-.3%2024.5%200%2036.7%200%2012%200%2024.1-.3%2036.2%200%201.9.1%203.6.8%204.7%202.4%201.3%201.9%201.1%204.5%201.2%206.6.9%2015%201.7%2030%202.6%2045%20.1%202.3.8%205.2-.3%207.4-1%201.9-2.9%203-5%203-11.1.4-22.3%200-33.5%200h-43.3c-.9.1-1.7.1-2.6.1z%22%2F%3E%3Cpath%20d%3D%22M4.6%2052.6c-.9%200-4.1.4-4.4-.2-.2-.4%200-1.4%200-1.9%200-.7%200-1.5.1-2.2.1-2.6.3-5.1.5-7.6.6-5.4%201.5-10.8%203-16C6%2016.9%209.4%208.4%2015.9%203.3%2020.5-.5%2026.5-1.2%2031.7%202c6.5%204%2010.1%2011.8%2012.5%2018.7C46%2026%2047.3%2031.6%2048%2037.2c.3%202.5.6%205%20.8%207.5.1%201.3.2%202.6.2%203.9%200%20.7%200%201.3.1%202%200%20.4.2%201.7%200%202-.4.5-3.6.1-4.4.1%200-10.1-1.2-20.3-4.5-29.9-2-5.8-4.8-12.4-9.9-16.2-3-2.2-6.7-2.7-10-.8-4.9%202.8-7.9%208.7-10%2013.8C6.5%2028.7%205%2039%204.7%2049.1c0%201.1-.1%202.3-.1%203.5z%22%2F%3E%3C%2Fsvg%3E" alt="" /></div>
    <div className={styles.Mytheresa_Shopping_cart_logo_count}>0</div>
    </div>
    </div>
  )
}

export default MytheresaLogo