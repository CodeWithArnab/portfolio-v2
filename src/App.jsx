import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import SKills from "./components/skills/SKills";
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
      <section className="flex items-center justify-center">
        <Experience/> 
        </section>
      <section id="Skills">
        <Parallax type="skills"/>
      </section>
      <section>
        <SKills/>
      </section>
      
      <section id="Projects"><Parallax type="projects"/></section>
      <Projects/>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
