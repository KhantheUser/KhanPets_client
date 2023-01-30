
import HomePage from './pages/HomePage/HomePage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ConfessPage from './pages/ConfessPage/ConfessPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CartPage from './pages/Cart/CartPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreateAnimalPage from './pages/CreateAnimalPage/CreateAnimalPage';
import Messenger from './pages/Messenger/Messenger';

function App() {
  
  return (
     

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route  path='/confession' element={<ConfessPage/>}/>
      <Route path='/product-detail/:productId' element={<ProductDetail/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/cart/me/:userId' element={<CartPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<CreateAnimalPage/>}/>
      <Route path='/messenger' element={<Messenger/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
