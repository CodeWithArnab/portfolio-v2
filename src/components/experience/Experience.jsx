import "./experience.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
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
const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 sm:w-[60%] w-4/5 mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold md:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-purple-700 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-cyan-500 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};
const Experience = () => {
  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className="experience">
      <motion.h2 className="heading">Experience</motion.h2>
      <motion.div className="container">
        <motion.ul>
          <Details
            position="Web Developer"
            company="Kdbt Solutions"
            companyLink="https://www.koderbyte.com/"
            time="Feb 2023 - Feb 2023"
            address="Remote"
            work="At Kdbt Solutions, Mumbai, I developed admin panels for organization apps with ReactJS, created a web version of Safari for Android, and built an anonymous video chatting WebApp. I also designed a payment gateway using StripeJS and NextJS and created an anonymous messaging system with NextJS and SCSS, implementing efficient Server-Side Rendering."
            
          />
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
