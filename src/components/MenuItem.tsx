import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ item }: { item: string }) => {
  return (
    <li className="navbar-li">
      <motion.a
        className="menu-item"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} 
        href={`/${item.toLowerCase()}`}>{item.toUpperCase()}
        </motion.a>
    </li>
  );
};
