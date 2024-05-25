import { useState } from "react";
import { useEffect } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import "../ProductsCard/ProductsCard.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div className="bg-[#0B1746]">
      <div className="max-w-[1250px] mx-auto">
        <p className="title-font mb-16">
          <span className="text-[#AEEE6A]">Offering </span>a diverse range of{" "}
          <br />
          products.
        </p>
        <div className="grid grid-cols-5">
          {products.map((product, index) => (
            <ProductsCard
              key={product.id}
              product={product}
              index={index}
            ></ProductsCard>
          ))}
        </div>
        <div className="circleDesign "></div>
        <div className="circleDesign2"></div>
      </div>
    </div>
  );
};

export default Products;
