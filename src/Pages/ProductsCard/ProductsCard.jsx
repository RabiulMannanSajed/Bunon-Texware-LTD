const ProductsCard = ({ product, index }) => {
  const { clotheName, img } = product;
  return (
    <div>
      {index % 2 ? (
        <div className="mt-9 productHover">
          <img
            className="h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
            src={img}
            alt=""
          />
          <p className="clotheDesign text-white ">{clotheName}</p>
        </div>
      ) : (
        <div className="productHover">
          <img
            className=" rounded flex h-full items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
            src={img}
            alt=""
          />
          <p className="clotheDesign text-white ">{clotheName}</p>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
