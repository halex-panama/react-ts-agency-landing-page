import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
