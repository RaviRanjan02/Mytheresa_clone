
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MytheresaLogo from './components/MytheresaLogo';
import Categories from './components/Categories';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CartPage from './pages/CartPage';
import Wishlist from './pages/Wishlist';
import { Divider } from '@chakra-ui/react'


function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      <MytheresaLogo/>
      <Categories/>
      <Divider orientation='horizontal' />
      <Home/>
      <Footer/>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <CartPage/> */}
      {/* <Wishlist/> */}
    </div>
  );
}

export default App;
