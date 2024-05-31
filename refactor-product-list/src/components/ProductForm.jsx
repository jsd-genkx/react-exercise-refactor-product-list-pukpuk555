import { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price: parseFloat(price),
      img,
    };
    addProduct(newProduct);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Product Name</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <h4>Price</h4>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <h4>Image</h4>
      <input
        type="text"
        value={img}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add product</button>
    </form>
  );
};

export default ProductForm;
