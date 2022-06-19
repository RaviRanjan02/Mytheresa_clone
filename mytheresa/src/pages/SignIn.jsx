
import {useState } from 'react';
import { useContext } from "react"
import React from "react";
import Footer from "../components/Footer";
import styles from "../pages/SignIn.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/Authcontext";

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

  const navigate = useNavigate();
  const {handleAuth}=useContext(AuthContext)
  const [mobNo, setMobNo] = useState("");

  const handleChange = (e) => {
    setMobNo(e.target.value);
  };

  const handleLogin = (mobileNumber) => {
    console.log("mobile",mobileNumber)
    if(mobileNumber===""){
      return alert("mobile number cannot be empty")
    }
    else{

    
    axios
      .post("https://bewakoof-projects.herokuapp.com/number", {
        mobileNumber: mobileNumber,
      })
      .then((res) => {
         console.log("abhi",res.data.token)
        if(res.data.token){
          handleAuth(true)
            navigate(-2 ,{replace:true})
        }
        else{
          navigate("/signup");
        } 
      })
      .catch((e) => {
        navigate("/signup");
      });
    }
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
            <input type="number" placeholder=" enter mobile no *" onChange={handleChange} ></input>
          </div>
        </div>
        <div>
          <p>* required fields</p>
        </div>
        <div>
          <p>Forgot Your Password?</p>
        </div>
        <div>
          <button className={styles.Login_Button} onClick={() => {
                handleLogin(mobNo);
                navigate("/")
              }}>Login</button>
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
