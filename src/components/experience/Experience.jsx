import "./experience.scss";
const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 sm:w-[60%] w-4/5 mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a 
          href={companyLink}
          target="_blank" rel="noreferrer"
          className="text-purple-700 capitalize"
          >@{company}</a>
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
    <div className="experience">
      <h2 className="heading">Experience</h2>
      <div className="container">
        <ul>
          <Details
            position="Web Developer"
            company="Kdbt Solutions"
            companyLink="https://www.koderbyte.com/"
            time="Feb 2023 - Feb 2023"
            address="Remote"
            work="At Kdbt Solutions, Mumbai, I developed admin panels for organization apps with ReactJS, created a web version of Safari for Android, and built an anonymous video chatting WebApp. I also designed a payment gateway using StripeJS and NextJS and created an anonymous messaging system with NextJS and SCSS, implementing efficient Server-Side Rendering."w
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;