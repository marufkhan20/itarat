import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";
import Header from "../components/shared/header";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
