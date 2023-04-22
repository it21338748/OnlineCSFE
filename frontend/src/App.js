import "bootstrap/dist/css/bootstrap.css"
import Product from "./components/ProductManagement/Product"
import Test from "./components/ProductManagement/test1"
import Test2 from "./components/ProductManagement/test2"
import Test3 from "./components/ProductManagement/test3"
import ProductManagement from "./components/ProductManagement/Management"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import ViewProduct from "./components/ProductManagement/ViewProduct"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/product-management" element={<ProductManagement/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/test2" element={<Test2/>}></Route>
        <Route path="/test3/:id" element={<Test3/>}></Route>
        <Route path="/view-product/:id" element={<ViewProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
