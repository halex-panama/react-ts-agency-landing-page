//styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Brand from "./components/Brand/Brand";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Services />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
