import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MytheresaLogo from "../components/MytheresaLogo";
import Navbar from "../components/Navbar";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import styles from "../pages/Wishlist.module.css";

const Wishlist = () => {
  const [wish, setWish] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/whishlist");
    const data = await response.json();
    setWish(data);
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const add = (e, id) => {
    const cartData = {
      productimage_url: e.image,
      productprice: e.price,
      productname: e.name,
      producttitle: e.category,
    };
    axios.post(`http://localhost:8080/cart`, cartData);
    alert("id");
    console.log(cartData);
  };

  function remove(id) {
    fetch(`http://localhost:8080/whishlist/${id}`, {
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
    <div className={styles.Wishlist_Main}>
      <Navbar />
      <MytheresaLogo />
      <Categories />
      <hr></hr>
      <div className={styles.Wishlist_Items_layout_main}>
        <div className={styles.Wishlist_Items_layout_left}>
          <div className={styles.Wishlist_product_Main_container_left}>
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
        </div>
        <div className={styles.Wishlist_Items_layout_Right}>
          {wish.map((e, id) => {
            return (
              <div
                className={styles.Wishlist_product_Main_container_Right_layout}
                key={id}
              >
                <div
                  className={
                    styles.Wishlist_product_Main_container_Right_product
                  }
                >
                  <div>
                    <img src={e.productimage_url} alt="" />
                  </div>
                  <div>{e.productname}</div>
                  <div>{e.producttitle}</div>
                  <div
                    className={
                      styles.Wishlist_product_Main_container_Right_product_price
                    }
                  >
                    {e.productprice}
                  </div>
                  <div
                    className={
                      styles.Wishlist_product_Main_container_Right_product_button
                    }
                  >
                    <div>
                      {" "}
                      <Button
                        size="xs"
                        onClick={(e) => {
                          add(e);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div>
                      {" "}
                      <Button
                        size="xs"
                        onClick={() => {
                          remove(e.id);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
