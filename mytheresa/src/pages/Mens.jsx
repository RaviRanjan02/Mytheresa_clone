import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MytheresaLogo from "../components/MytheresaLogo";
import Navbar from "../components/Navbar";
import styles from "../pages/Mens.module.css";
import axios from "axios";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Checkbox,
} from "@chakra-ui/react";

const Mens = () => {
  const [mens, setMens] = useState([]);

  const getMens = async () => {
    const response = await fetch("https://mytheresabackend.herokuapp.com/Mens");
    const data = await response.json();
    setMens(data);
  };

  useEffect(() => {
    getMens();
  }, []);

  const add = (e) => {
    const cartData = {
      productimage_url: e.image,
      productprice: e.price,
      productname: e.name,
      producttitle: e.category,
    };
    axios.post(`https://mytheresabackend.herokuapp.com/cart`, cartData);
    // alert("id");
    console.log(cartData);
  };

  const Whislist = (e) => {
    const WhislistData = {
      productimage_url: e.image,
      productprice: e.price,
      productname: e.name,
      producttitle: e.category,
    };
    axios.post(`https://mytheresabackend.herokuapp.com/whishlist`, WhislistData);
    // alert("id");
    console.log(WhislistData);
  };

  return (
    <div className={styles.Mens_Main}>
      <div className={styles.Mens_page_main_layout}>
        <div className={styles.Mens_breadcurms}>
          <div className={styles.Mens_breadcurms_features}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Mens</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">New Arrivals</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Current Week</BreadcrumbLink>
                <div>
                  <MdOutlineKeyboardArrowRight />
                </div>
                <div>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className={styles.Breadcrumb_total_proudct_count}>
            208 products
          </div>
          <div className={styles.Breadcrumb_sort}>
            <select>
              <option value="price">sort by</option>
              <option value="price">Price low-to-high</option>
              <option value="price">Price high-to-low</option>
              <option value="price">New items</option>
            </select>
          </div>
          <div className={styles.Breadcrumb_pageniate}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className={styles.Breadcrumb_pageniate_arrow}>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className={styles.Breadcrumb_pageniate_arrow}>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.Mens_Sale_Non_sale}>
          <div className={styles.Mens_Sale_Non_main}>
            <div className={styles.Mens_Sale_Non_title}>Sale</div>
            <div className={styles.Mens_Sale_Non_check}>
              <Checkbox />
            </div>
          </div>
          <div className={styles.Mens_Sale_Non_main}>
            <div className={styles.Mens_Sale_Non_title}>Non-sale</div>
            <div className={styles.Mens_Sale_Non_check}>
              <Checkbox />
            </div>
          </div>
          <div className={styles.Mens_Sale_Non_main}>
            <div className={styles.Mens_Sale_Non_title}>Show all</div>
            <div className={styles.Mens_Sale_Non_check}>
              <Checkbox />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.Mens_product_Main_container}>
          <div className={styles.Mens_product_Main_container_left}>
            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">NEW ARRIVALS</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>Current WeeK</div>
                      <div>Previous WeeK</div>
                      <div>Essentials</div>
                      <div>Tailoring</div>
                      <div>Dress Code</div>
                      <div>Summer Wardrobe</div>
                      <div>Outdoor & Activewear</div>
                      <div>The Gift Shop</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">Category</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>Accessories</div>
                      <div>Bags</div>
                      <div>Clothing</div>
                      <div>Shoes</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">Reduction By %</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>20%</div>
                      <div>30%</div>
                      <div>50%</div>
                      <div>60%</div>
                      <div>70%</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">Designer</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>Acne Studios</div>
                      <div>Adidas</div>
                      <div>Adish</div>
                      <div>Alexander McQueen</div>
                      <div>Amiri</div>
                      <div>Balenciaga</div>
                      <div>Bottega Veneta</div>
                      <div>Brunello Cucinelli</div>
                      <div>Burberry</div>
                      <div>Christian Louboutin</div>
                      <div>Dior Eyewear</div>
                      <div>Dolce&Gabbana</div>
                      <div>Frescobol Carioca</div>
                      <div>Giorgio Armani</div>
                      <div>Gucci</div>
                      <div>Herno</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">Size</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>XS</div>
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">Colours</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>Beige</div>
                      <div>Black</div>
                      <div>Blue</div>
                      <div>Brown</div>
                      <div>Gold</div>
                      <div>Green</div>
                      <div>Grey</div>
                      <div>Metallic</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left">Pattern</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div>
                      <div>Checked</div>
                      <div>Embellished</div>
                      <div>Embroidered</div>
                      <div>Pattern</div>
                      <div>Plain</div>
                      <div>Pkola dots</div>
                      <div>Printed</div>
                      <div>Striped</div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className={styles.Mens_product_Main_container_Right}>
           {mens.map((e,id)=>{
            return(
            <div className={styles.Mens_product_Main_container_Right_layout}>
              <div
                className={styles.Mens_product_Main_container_Right_product}
              >
                <div>
                  <img
                    src={e.image}
                    alt=""
                  />
                </div>
                <div>{e.name}</div>
                <div>{e.category}</div>
                <div
                  className={
                    styles.Mens_product_Main_container_Right_product_price
                  }
                >
                  {e.price}
                </div>
                <div
                  className={
                    styles.Mens_product_Main_container_Right_product_button
                  }
                >
                  <div>
                    {" "}
                    <Button size="xs" onClick={() => {
                        add(e);
                      }} >Add to Cart</Button>
                  </div>
                  <div>
                    {" "}
                    <Button size="xs" onClick={() => {
                        Whislist(e);
                      }}>Add to Wishlist</Button>
                  </div>
                </div>
              </div>
             
              
            </div>
            )
           })} 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mens;



