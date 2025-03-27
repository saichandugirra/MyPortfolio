/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <motion.div className="flex flex-shrink-0 items-center text-4xl">
        SC
      </motion.div>
    </nav>
  );
};

export default NavBar;
