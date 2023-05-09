import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "./customCompoent/Loading/Loading";
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));
const Success = lazy(() => import("./components/Success/Success"));
const FoodPage = lazy(() => import("./pages/FoodPage/FoodPage"));
const ConfessPage = lazy(() => import("./pages/ConfessPage/ConfessPage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const CreateAnimalPage = lazy(() =>
  import("./pages/CreateAnimalPage/CreateAnimalPage")
);
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const News = lazy(() => import("./pages/News/News"));
function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center ">
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/confession" element={<ConfessPage />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart/me/:userId" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateAnimalPage />} />
         
          <Route path="/checkout/success" element={<Success />} />
          <Route path="/checkout/me" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
