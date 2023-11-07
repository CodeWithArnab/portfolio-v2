import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const variants = {
    initial: {
    //   x: -500,
      y: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "experience"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            :type==="skills"?
             "linear-gradient(180deg, #111132, #505064)"
             :"linear-gradient(180deg, #111132, #0c0c1d)"
      }}
    >
      <motion.h1 variants={variants} initial="initial" whileInView="animate" style={{ y: yText }}>
        {type === "experience" ? "What I did?" :type=="skills"?"What I know?": "What I made?"}
        
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "experience" ? "/planets.png" : type==="skills"? "/sun.png":"/planets.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
