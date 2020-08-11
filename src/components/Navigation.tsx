import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const items: string[] = ["Home", "About", "Photography"];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {items.map((item, idx) => (
      <MenuItem item={item} key={idx} />
    ))}
  </motion.ul>
);
