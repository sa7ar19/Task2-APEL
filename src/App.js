import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";
import Navbar from "./components/navbar";
import PageNotFound from "./pages/PageNotFound";

 

function App() {
  return (

<> 
 
  
   
    <BrowserRouter>
    
<Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path=":id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    
    </BrowserRouter> 
</>
 
  );
}

export default App;
