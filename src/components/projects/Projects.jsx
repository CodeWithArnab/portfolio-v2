import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Time Chatting App",
    img: "/chatApp.png",
    desc: "I developed a real-time chat app using React and Tailwind CSS. It offers instant messaging, user authentication, message history, and a clean, responsive UI. This project demonstrates my skills in frontend development and UI design.",
    link:"https://quickchat-v1.netlify.app/login",
  },
  {
    id: 2,
    title: "Safari browser",
    img: "/proj_safari.png",
    desc: "A safari browser for android users to experience real safari. Built using React.js this is a beatiful and animative clone of safari browser from iOS",
    link:"https://koderbyte.com/vpnbyte/browser/safari/"
  },
  {
    id: 3,
    title: "Movie DB",
    img: "/movieDb.png",
    desc: "I created a React website showcasing a movie database, featuring detailed movie information and ratings. Users can easily explore and discover top-rated films. This project highlights my web development skills and data presentation capabilities.",
    link:"https://soukarja.github.io/ImdbMovieWebsite_React/"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
