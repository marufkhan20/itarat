import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";

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
