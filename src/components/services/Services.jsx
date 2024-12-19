import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import "./services.scss";
import Tech from "./Tech";

const tech = [
  {
    name: "React.js",
    image: "/tech/reactjs.png",
  },
  {
    name: "Next.js",
    image: "/tech/nextjs.png",
  },
  {
    name: "Node.js",
    image: "/tech/nodejs.png",
  },
  {
    name: "Express.js",
    image: "/tech/express.png",
  },
  {
    name: "SQL",
    image: "/tech/sql.png",
  },
  {
    name: "JavaScript",
    image: "/tech/js.png",
  },
  {
    name: "TypeScript",
    image: "/tech/typescript.png",
  },
  {
    name: "Html5",
    image: "/tech/html.png",
  },
  {
    name: "CSS3",
    image: "/tech/css.png",
  },
  {
    name: "SASS",
    image: "/tech/sass.png",
  },
  {
    name: "TailwindCSS",
    image: "/tech/tailwind.svg",
  },
  {
    name: "Redux",
    image: "/tech/redux.png",
  },
  {
    name: "C++",
    image: "/tech/c++.png",
  },
  {
    name: "Git",
    image: "/tech/git.png",
  },
  {
    name: "Github",
    image: "/tech/github.png",
  },
];

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

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I have experience in building scalable <br /> web solutions
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Technologies</motion.b>{" "}
            that
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>I have</motion.b> worked
            with.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {tech.map((item, i) => (
          <Tech key={i} name={item.name} image={item.image} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
