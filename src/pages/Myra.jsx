import Categories from "../components/myra/categories";
import Hero from "../components/myra/hero";
import SpecialSale from "../components/myra/SpecialSale";
import Weedings from "../components/myra/weedings";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/header";

const Myra = () => {
  return (
    <main>
      <Header />
      <Categories />
      <Hero />
      <SpecialSale />
      <Weedings />
      <Footer />
    </main>
  );
};

export default Myra;
