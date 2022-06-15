
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MytheresaLogo from './components/MytheresaLogo';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MytheresaLogo/>
      <Categories/>
      <hr></hr>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
