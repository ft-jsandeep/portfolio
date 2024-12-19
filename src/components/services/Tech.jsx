import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

const Tech = ({ name, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["45deg", "-45deg"]);

  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-45deg", "45deg"]);

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xpct = mouseX / width - 0.5;
    const ypct = mouseY / height - 0.5;

    x.set(xpct);
    y.set(ypct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="listItem"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <img src={`${image}`} alt={name} />
      <span>{name}</span>
    </motion.div>
  );
};

export default Tech;
