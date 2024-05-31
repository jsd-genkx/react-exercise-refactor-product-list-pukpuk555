const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.img}
            alt="product.name"
            className="w-[200px] h-auto"
          />
          <div>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
