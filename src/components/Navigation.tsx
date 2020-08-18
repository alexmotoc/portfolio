import * as React from "react";
import clsx from 'clsx';
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

export interface NavigationItem {
  name: string;
  url?: string;
};

const items: NavigationItem[] = [
  { name: "Home", url: '/' },
  { name: "About" },
  { name: "Photography" }
];

interface NavigationProps {
  open: boolean;
};

export const Navigation = (props: NavigationProps) => (
  <motion.ul className={clsx("navbar-ul", {"sidebar-open": props.open})} variants={variants}>
    {items.map((item, idx) => (
      <MenuItem item={item} key={idx} />
    ))}
  </motion.ul>
);
