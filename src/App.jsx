import Navbar from "./components/Navbar";
import Coursal from "./components/coursal";
import Product from "./components/Product";
import ProductLists from "./components/ProductLists";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Coursal />
              <ProductLists />
            </>
          }
        />
        <Route path="about" element={<Aboutus />}/>
        <Route path="product/:productId" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
