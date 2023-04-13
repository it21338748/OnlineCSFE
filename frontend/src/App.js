import "bootstrap/dist/css/bootstrap.css"
import Product from "./components/ProductManagement/Product"
import ProductManagement from "./components/ProductManagement/Management"
import{BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/product-management" element={<ProductManagement/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
