import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/common/Cart";
import DetailContainer from "./components/pages/itemListContainer/DetailContainer";




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<DetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
