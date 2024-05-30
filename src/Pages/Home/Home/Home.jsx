import Products from "../../Products/Products";
import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import CarouselPart from "../CarouselPart/CarouselPart";
import ExpReview from "../ExpReview/ExpReview";
import SelectUs from "../SelectUs/SelectUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CarouselPart></CarouselPart>
      <Products></Products>
      <ExpReview></ExpReview>
      <SelectUs></SelectUs>
      <BlogSection></BlogSection>
    </div>
  );
};

export default Home;
