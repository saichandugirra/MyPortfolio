import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { DiJava, DiMysql } from "react-icons/di";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SiSpring } from "react-icons/si";
import { motion } from "framer-motion";

// Icon animation variants for a floating effect
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Frontend Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="my-10 text-center text-3xl">Front-End</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* HTML */}
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaHtml5 className="text-5xl text-orange-500" />
          </motion.div>

          {/* CSS */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaCss3Alt className="text-5xl text-blue-500" />
          </motion.div>

          {/* JavaScript */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJsSquare className="text-5xl text-yellow-400" />
          </motion.div>

          {/* React */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Backend Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="my-10 text-center text-3xl">Back-End</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Java */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiJava className="text-5xl text-red-500" />
          </motion.div>

          {/* Spring */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiSpring className="text-5xl text-green-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Database Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="my-10 text-center text-3xl">Databases & Git</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-5xl text-blue-500"
            />
          </motion.div>

          {/* MySQL */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiMysql className="text-5xl text-blue-600" />
          </motion.div>

          {/* Git */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGitAlt className="text-5xl text-orange-500" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
