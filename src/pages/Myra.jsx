import Collections from "../components/myra/collections";
import Footer from "../components/myra/Footer";
import Header from "../components/myra/Header";
import UpcomingCollections from "../components/myra/UpcomingCollections";

const Myra = () => {
  return (
    <main>
      <Header />
      <Collections />
      <UpcomingCollections />
      <Footer />
    </main>
  );
};

export default Myra;
