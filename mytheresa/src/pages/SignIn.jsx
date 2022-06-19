import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MytheresaLogo from "../components/MytheresaLogo";
import Navbar from "../components/Navbar";
import styles from "../pages/SignIn.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SignIn = () => {
  const SignInformpageslide = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className={styles.Mytheresa_SignIn_Form_Main}>
      <div className={styles.Mytheresa_SignIn_Form_layout_main}>
      <form className={styles.Mytheresa_SignIn_Form_layout_left}>
        <div>
       <Link to="/signup"><h3>IF NOT REGISTERED? CLICK HERE TO REGISTER </h3></Link>   
        </div>
        <div>
          <p>If you have an account with us, please log in.</p>
        </div>
        <div className={styles.SingIn_Form_Input_Data_all}>
          <div>
            <input type="email" placeholder="email address *"></input>
          </div>
          <div>
            <input type="password" placeholder="password *"></input>
          </div>
        </div>
        <div>
          <p>* required fields</p>
        </div>
        <div>
          <p>Forgot Your Password?</p>
        </div>
        <div>
          <button className={styles.Login_Button}>Login</button>
        </div>
        <div className={styles.SingIn_Form_check_terms_condition_main}>
          <div>
            <p>
              At Mytheresa, we keep your information secure. As a result, it
              will be necessary for you to log in to your account before you are
              able to place an order or change the information on your account.
              You will be asked to log in to complete your order even if you
              have already been greeted on the website.
            </p>
          </div>
        </div>
      </form>
      <div className={styles.Mytheresa_SingIn_Form_layout_right}>
        <div className={styles.Mytheresa_SingIn_Form_layout_right_top}>
          <Slider {...SignInformpageslide}>
            <div className={styles.SingIn_page_Image}>
              <img
                src="https://user-images.githubusercontent.com/91020498/173836524-4bf3c0d1-4513-439a-a37d-f983a3b79df4.png"
                alt=""
              />
            </div>
            <div className={styles.SingIn_page_Image}>
              <img
                src="https://user-images.githubusercontent.com/91020498/173836563-fea886a1-dcb8-4b7c-a342-c769fe479273.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
