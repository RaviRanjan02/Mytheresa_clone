import { useEffect, useState } from 'react';
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import styles from "../pages/SignUp.module.css";
import { Button } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios';

const SignUp = () => {
  const Signupformpageslide = {
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
  
  const [userData, setUserData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: ""
});

const [data, setData] = useState([]);
    
    const handleChange = (e) => {
        const{ name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        console.log(e.target);
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      setUserData([...data, userData]);

      axios.post('https://bewakoof-projects.herokuapp.com/register', userData).then(() => {
          alert('SignUp Successfully');
          navigate('/signin');

          setUserData({
              fullName: "",
              mobileNumber: "",
              email: "",
              password: ""
          });
          
      });
  };

  useEffect(() => {
      getData();
  },[]);
   
  const getData = () => {
    axios.get('https://bewakoof-projects.herokuapp.com/register').then((res) => {
        setData(res.data);
        console.log(res.data);
    });
};
 




  return (
    <div className={styles.Mytheresa_Signup_Form_Main}>
      <div className={styles.Mytheresa_Signup_Form_layout_main}>
        <form className={styles.Mytheresa_Signup_Form_layout_left}>
          <div>
            <h3>CREATE AN ACCOUNT</h3>
          </div>
          <div>
            <p>
              Please enter the following information to create your account.
            </p>
          </div>
          <div className={styles.Form_Radio_Main}>
            <div>
              <input type="radio"></input>

              <label>Ms.</label>
            </div>
            <div>
              <input type="radio"></input>

              <label>Mrs.</label>
            </div>
            <div>
              <input type="radio"></input>

              <label>Mr.</label>
            </div>
          </div>
          <div className={styles.Form_Input_Data_all}>
            <div>
              <select>
                <option>academic title</option>
                <option>Dr.</option>
                <option>Prof.</option>
                <option>Prof. Dr.</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="first name *" value={userData.fullName} name='fullName' onChange={handleChange}></input>
            </div>
            <div>
              <input type="text" placeholder="Mobile Number *" value={userData.mobileNumber} name='mobileNumber' onChange={handleChange}></input>
            </div>
            <div>
              <input type="email" placeholder="email address *" value={userData.email} name='email' onChange={handleChange}></input>
            </div>
            <div>
              <input type="password" placeholder="password *" value={userData.password} name='password' onChange={handleChange}></input>
            </div>
          </div>

          <div className={styles.Form_check_terms_condition_main}>
            <div>
              <Checkbox defaultChecked></Checkbox>
            </div>
            <div >
              <p>
                From now on I will receive the Mytheresa Newsletter with
                selected fashion offers. If I do not wish to receive the
                newsletter, I can unsubscribe at any time free of charge at
                privacy@mytheresa.com.I agree that Mytheresa may insert
                analytical web beacons into the newsletter and create a
                personalized user profile based on my purchase and usage
                behavior, including sending a notification when I have placed
                something in the shopping cart. Further details can be found in
                our Privacy Policy, clause 5. I understand that I can revoke my
                consent at any time by emailing privacy@mytheresa.com
              </p>
            </div>
          </div>
          <div>
            <p>* required fields</p>
          </div>
          <div>
            <Button colorScheme="gray" color="black" onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </form>
        <div className={styles.Mytheresa_Signup_Form_layout_right}>
          <div className={styles.Mytheresa_Signup_Form_layout_right_top}>
            <Slider {...Signupformpageslide}>
              <div className={styles.SignUp_page_Image}>
                <img
                  src="https://user-images.githubusercontent.com/91020498/173836524-4bf3c0d1-4513-439a-a37d-f983a3b79df4.png"
                  alt=""
                />
              </div>
              <div className={styles.SignUp_page_Image}>
                <img
                  src="https://user-images.githubusercontent.com/91020498/173836563-fea886a1-dcb8-4b7c-a342-c769fe479273.png"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default SignUp;
