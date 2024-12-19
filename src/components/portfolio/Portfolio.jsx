import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "iPrep App",
    image: "/portfolio/iPrep.png",
    link: "https://learn.iprep.in/",
    desc: "Developed a learning app for K-12 students, offering animated video lectures, an extensive library of course books, practice tests, and topic-based assessments. Integrated comprehensive test preparation for competitive exams to enhance student readiness. Tech Stack: Next.js, Typescript, Tailwindcss, Express.js, Firebase.",
  },
  {
    id: 2,
    title: "UiEducon",
    image: "/portfolio/uiEducon.png",
    link: "https://ui-educon.com/",
    desc: "Developed an EdTech platform aimed at offering upskilling courses tailored for college students and research enthusiasts, focusing on bridging knowledge gaps and enhancing career readiness. Tech Stack: Next.js, Typescript, Tailwindcss, Express.js, Firebase.",
  },
  {
    id: 3,
    title: "Fodrix Blog",
    image: "/portfolio/fodrixBlog.png",
    link: "https://fodrix-blog-e5dqsqv64-fodrix-photography.vercel.app/",
    desc: "Designed and developed a blog site using modern web technologies to support dynamic content and improved performance. Tech stack: NextJS, GraphCMS, GraphQL, TailwindCSS.",
  },
  {
    id: 4,
    title: "Sticky Captions",
    image: "/portfolio/stickyCaptions.png",
    link: "https://sticky-captions.vercel.app/",
    desc: "A fun application to add custom captions to any hosted video and play with it. Tech stack: NextJS, Redux Toolkit, TailwindCSS.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link, "_blank")}>
              Checkout App
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
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
        <div className="innerContainer">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
