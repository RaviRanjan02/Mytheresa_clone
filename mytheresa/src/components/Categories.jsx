import React from "react";
import styles from "../components/Categories.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
} from "@chakra-ui/react";

const Categories = () => {
  return (
    <div className={styles.Categories_Main}>
      <div className={styles.Categories_left}>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='5px' bg='none' size='md' fontWeight="normal">NEW ARRIVALS</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff' >
                  <Box marginLeft="50px" >JUST IN</Box>
                  <Box marginLeft="200px" >DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                 
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%" display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%">
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal"> DESIGNERS</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
            
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%" >
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal"> CLOTHING</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                  
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%" >
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal">SHOES</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                  
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%" >
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal">BAGS</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                  
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%" >
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal">ACCESSORIES</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                  
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%" >
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal">JEWELLERY</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                  
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%" >
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal"> VACATION</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                 
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%"  display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%">
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.Categories_left_Pop}>
          <Popover placement="bottom-start" trigger='hover'>
            <PopoverTrigger>
              <Button padding='2px' bg='none' size='md' fontWeight="normal">SALE</Button>
            </PopoverTrigger>
            <PopoverContent w="1200px" h="320px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Box w="100%" display="flex" bg='#ffffff'>
                  <Box marginLeft="50px">JUST IN</Box>
                  <Box marginLeft="200px">DISCOVER</Box>
                </Box>
                <Box
                  w="100%"
                 
                  display="flex"
                  alignItems="center"
                >
                  <Box w="50%" display='flex' padding="5px">
                    <Box w="50%" >
                    <Box>Current Week</Box>
                    <Box>Previous Weeks</Box>
                    <Box>Essentials</Box>
                    <Box>Tailoring Edit</Box>
                    <Box>Dress Code</Box>
                    <Box>Summer Wardrobe</Box>
                    <Box>Outdoor & Activewear</Box>
                    <Box>The Gift Shop</Box>
                    </Box>
                    <Box w="50%">
                    <Box>Clothing</Box>
                    <Box>Shoes</Box>
                    <Box>Bags</Box>
                    <Box>Accessories</Box>
                    </Box>
                  </Box>
                  <Box w="50%"  padding="5px">
                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" alt=""></img>
                  </Box>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className={styles.Categories_Right}>
        <input type="text" placeholder="Search for..."></input>
        <div className={styles.Categories_Right_search_logo}>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Categories;
