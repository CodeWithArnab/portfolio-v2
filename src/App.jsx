import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
const App = () => {
  return (
    <div>
      
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Experience">
        <Parallax type="experience"/>
      </section>
      <section><Experience/> </section>
      <section id="Projects"><Parallax type="Projects"/></section>
      <section>Projects1</section>
      <section>Projects2</section>
      <section>Projects3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
