import Products from "../../Products/Products";
import Banner from "../Banner/Banner";
import CarouselPart from "../CarouselPart/CarouselPart";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CarouselPart></CarouselPart>
      <Products></Products>
    </div>
  );
};

export default Home;
