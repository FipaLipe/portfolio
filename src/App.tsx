import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interests";

const App = () => {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <Hero />
      <AboutMe />
      <Experiences />
      <Interests />
      <Footer />
    </div>
  );
};

export default App;
