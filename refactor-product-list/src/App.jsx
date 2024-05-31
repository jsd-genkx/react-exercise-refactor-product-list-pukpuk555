import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: "pid-1",
      name: "Product 1",
      price: 10.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      isSelected: false,
    },
    {
      id: "pid-2",
      name: "Product 2",
      price: 10.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      isSelected: false,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([
      ...products,
      { ...newProduct, id: `pid-${products.length + 1}` },
    ]);
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
