import { Button } from '@chakra-ui/react'
import React,{useState , useEffect} from "react";
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import MytheresaLogo from '../components/MytheresaLogo'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../pages/CartPage.module.css"
const CartPage = () => {
  
  const [cart ,setCart] = useState([])

  const [total,setTotal]=useState([])
  const [discount, setDiscount] = useState(30 / 100);
  const [redeem, setRedeem] = useState({
    couponCode: "",
  });
  const [check, setCheck] = useState(false);



  const getUser = async () => {
    const response = await fetch("https://mytheresabackend.herokuapp.com/cart");
    const data = await response.json();
    setCart(data);
    var a = 0;
    var add = 0;
    data.map((e) => {
      a = +e.productprice;
      add += a;
    });
    setTotal(total + add);
    
  };


  function remove(id) {
    fetch(`https://mytheresabackend.herokuapp.com/cart/${id}`, {
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

  const handleChange = (e) => {
    setRedeem({ ...redeem, [e.target.name]: e.target.value });
   
  };


  const handleClick = (e) => {
      if (redeem.couponCode === "Masai30") {
      setCheck(true);
      setTotal(Math.floor(total-( discount * total)));
    } else {
      setCheck(false);
      
    }
  };

 

  

 
  useEffect(() => {
    getUser();
  }, []);
  
  
  return (
    <div className={styles.CartPage_Main}>
    <div className={styles.CartPage_all_content}>
        <div className={styles.CartPage_your_shoppingbag_checkout}>
      <div>YOUR SHOPPING BAG</div>
      <Link to="/thanks"><div className={styles.Cartpage_proceed_checkout_button}><button>PROCEED TO CHECKOUT</button></div></Link>
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
      <div>Use code SALE for extra 30% off selected items on using Coupon code Masai30</div>
      <div className={styles.promocode_subtotal_main}>
        <div className={styles.promocode_subtotal_input_code_button}>
          <div className={styles.promocode_subtotal_input}>
            <input type="text" placeholder="Gift Card/Store Credit/Promo Code" value={redeem.couponCode}
              onChange={handleChange}  name="couponCode"></input>
            </div>
          <div className={styles.promocode_subtotal_button}><button  onClick={handleClick}>USE CODE</button></div>
        </div>
        <div className={styles.subtotal_grandtotal_main_cont}>
          <div className={styles.subtotal_grandtotal_main}>
          <div>Subtotal	:<span>{total}</span></div>
          <div>Grand Total :<span>{total}</span></div>
          </div>
          <div>VAT exception. VAT not included. Shipping not included.</div>
        </div>
      </div>
      <div className={styles.checkout_shopping_button_main}>
      <Link to="/"><div className={styles.Cartpage_proceed_checkout_button}><button>CONTINUE SHOPPING</button></div></Link>
        <Link to="/thanks"><div className={styles.Cartpage_proceed_checkout_button}><button>PROCEED TO CHECKOUT</button></div></Link>
        
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CartPage