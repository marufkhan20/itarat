import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Peoples from "../components/home/peoples";
import Photography from "../components/home/Photography";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Header from "../components/shared/header";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Peoples />
      <Photography />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
