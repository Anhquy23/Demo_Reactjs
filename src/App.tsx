import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import routers from "./routers";
import RootLayout from "./component/rootLayout";
import AdminLayout from "./component/adminLayout";
import ProductsList from "./component/ProductsList";
import { IProduct } from "./interfaces/product";
import { getProducts, removeProducts } from "./api/product";
import Signin from "./pages/singin";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {}
    })();
  }, []);

  const onHandleRemove = async (id: string | number) => {
    try {
      const { data } = await removeProducts(id);
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" index element="Home Page" />
          <Route path="contact" element="Contact" />
          <Route path="sighin" element={<Signin/>} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route
            path="products"
            element={
              <ProductsList onRemove={onHandleRemove} products={products} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
