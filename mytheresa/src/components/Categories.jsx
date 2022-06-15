import React from 'react'
import styles from "../components/Categories.module.css"
import { AiOutlineSearch } from "react-icons/ai";

const Categories = () => {
  return (
    <div className={styles.Categories_Main}>
    <div className={styles.Categories_left}>
    <div>NEW ARRIVALS</div>
    <div>DESIGNERS</div>
    <div>CLOTHING</div>
    <div>SHOES</div>
    <div>BAGS</div>
    <div>ACCESSORIES</div>
    <div>JEWELLERY</div>
    <div>VACATION</div>
    <div>SALE</div>
    </div>
    <div className={styles.Categories_Right}>
    <input type="text" placeholder="Search for..."></input>
    <div className={styles.Categories_Right_search_logo}><AiOutlineSearch/></div>

    </div>
    </div>
  )
}

export default Categories