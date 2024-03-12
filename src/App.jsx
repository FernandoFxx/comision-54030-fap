import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/common/Cart";
import DetailContainer from "./components/pages/itemDetailContainer/DetailContainer";
import Layout from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/pages/cart/CartContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<DetailContainer />} />
            <Route path="/cartContainer" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Route>
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
