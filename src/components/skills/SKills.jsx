import "./skills.scss";
import { motion } from "framer-motion";

const SKills = () => {
  const variants = {
    initial: {
      x: 0,
      y: 100,
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
  const progress_variants = {
    initial: {
      width: "0%",
    },
    animate: {
      width: "100%",
      transition: { duration: 2 },
    },
  };

  const items = [
    {
      name: "C++",
      progress: "90",
    },
    {
      name: "Java",
      progress: "75",
    },
    {
      name: "Javascript",
      progress: "80",
    },
    {
      name: "HTML & CSS",
      progress: "85",
    },
    {
      name: "React",
      progress: "80",
    },
    {
      name: "NodeJS",
      progress: "60",
    },
    {
      name: "SQL",
      progress: "60",
    },
  ];
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="skills mt-10"
    >
      <motion.div className="skills_heading text-center">
        <motion.h2 className="text-2xl font-bold md:text-8xl">Skills</motion.h2>
      </motion.div>
      <motion.div className="items p-10 grid md:grid-cols-2 flex-col gap-10 max-h-[30rem]">
        {items.map((item) => {
          return (
            <>
              < motion.div className="item ">
                <motion.span className="md:text-2xl font">{item.name}</motion.span>
                <motion.div className="relative progress_bar">
                  <motion.span className=" block rounded-md  bg-violet-300 min-h-[10px]"></motion.span>
                  <motion.span
                    variants={progress_variants}
                    initial="inital"
                    whileInView={{ width: item.progress+"%", transition: { duration: 2 } }}
                    className="absolute top-0  block rounded-md  bg-violet-700 min-h-[10px]"
                  ></motion.span>
                </motion.div>
              </motion.div>
            </>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SKills;
