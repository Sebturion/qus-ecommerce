import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Footer} from "./components/footer";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/'element={<Shop />} />
            <Route path='/cart'element={<Cart />} />
            <Route path='/login'element={<Login />} />
            <Route path='/signup'element={<Signup />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
