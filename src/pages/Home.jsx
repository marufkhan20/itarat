import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <main>
      <Header />
      <section>
        <img
          src="/images/hero-banner.png"
          alt="hero banner"
          className="w-full"
        />
      </section>
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
