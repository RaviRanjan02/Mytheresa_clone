import { Button } from '@chakra-ui/react'
import React,{useState , useEffect} from "react";
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import MytheresaLogo from '../components/MytheresaLogo'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import styles from "../pages/CartPage.module.css"
const CartPage = () => {
  
  const [cart ,setCart] = useState([])

  
  const getUser = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    setCart(data);
  };
  
  useEffect(() => {
    getUser();
  }, []);
  
  function remove(id) {
    fetch(`http://localhost:8080/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json().then((ress) => {
          //  console.log(ress)
          
          getUser();
         
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div className={styles.CartPage_Main}>
    <Navbar/>
    <MytheresaLogo/>
    <Categories/>
    <hr></hr>
    <div className={styles.CartPage_all_content}>
        <div className={styles.CartPage_your_shoppingbag_checkout}>
      <div>YOUR SHOPPING BAG</div>
      <div className={styles.Cartpage_proceed_checkout_button}><button>PROCEED TO CHECKOUT</button></div>
    </div>
    <div className={styles.CartPage_price_quantity_subtotal}>
      <div></div>
      <div className={styles.CartPage_price_qty}>
      <div>Price</div>
      <div>Quantity</div>
      <div>Substotal</div>
      </div>
    </div>
    <hr></hr>
    {cart.map((e,id)=>{
      return(
        <div className={styles.CartPage_items_Main}>
    <div className={styles.CartPage_items_left}>
      <div className={styles.CartPage_items_left_image}>
        <img src={e.productimage_url} alt="" />
      </div>
      <div className={styles.CartPage_items_left_description}>
        <div>{e.productname}</div>
        <div>{e.producttitle}</div>
        <div>Size: S</div>
        <div>Item No.:P00637462</div>
        <div><Button onClick={() => {
                  remove(e.id);
                }}>REMOVE</Button></div>
      </div>
    </div>
    <div className={styles.CartPage_items_right}>
      <div>{e.productprice}</div>
      <div>1</div>
      <div>{e.productprice}</div>
    </div>
    </div>
      )
    })}
    <hr></hr>
    <div className={styles.your_current_promotion}>
      <div>YOUR CURRENT PROMOTIONS</div>
      <div>Free Shippping</div>
    </div>
    <hr></hr>
    <div className={styles.checkout_main_cont}>
      <div>Use code SALE for extra 20% off selected items on sale orders over €600</div>
      <div className={styles.promocode_subtotal_main}>
        <div className={styles.promocode_subtotal_input_code_button}>
          <div className={styles.promocode_subtotal_input}><input type="text" placeholder="Gift Card/Store Credit/Promo Code" ></input></div>
          <div className={styles.promocode_subtotal_button}><button>USE CODE</button></div>
        </div>
        <div className={styles.subtotal_grandtotal_main_cont}>
          <div className={styles.subtotal_grandtotal_main}>
          <div>Subtotal	:<span> € 660.00</span></div>
          <div>Grand Total :<span> € 660.00</span></div>
          </div>
          <div>VAT exception. VAT not included. Shipping not included.</div>
        </div>
      </div>
      <div className={styles.checkout_shopping_button_main}>
      <div className={styles.Cartpage_proceed_checkout_button}><button>CONTINUE SHOPPING</button></div>
        <div className={styles.Cartpage_proceed_checkout_button}><button>PROCEED TO CHECKOUT</button></div>
        
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CartPage