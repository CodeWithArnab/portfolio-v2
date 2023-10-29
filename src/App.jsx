import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
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
      <Projects/>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
