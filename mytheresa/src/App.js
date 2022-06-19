
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
import Mens from './pages/Mens';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Life from './pages/Life';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      <MytheresaLogo/>
      <Categories/>
      <Divider orientation='horizontal' />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/men' element={<Mens/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/kids' element={<Kids/>}></Route>
      <Route path='/life' element={<Life/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
