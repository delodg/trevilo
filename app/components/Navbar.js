"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: [-90] }}
        animate={{ opacity: 1, y: [-250, 0] }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 50,
          delay: 0.5,
        }}
        className=" w-full flex flex-row justify-between text-white px-5 text-sm h-16  items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: [-90] }}
          animate={{ opacity: 1, x: [-255, 0] }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 50,
            delay: 2,
          }}
          className="text-4xl flex flex-row justify-start items-center w-2/12"
        >
          <i className="ri-checkbox-blank-circle-fill text-yellow-500"></i>
          <i className="ri-checkbox-blank-circle-fill -m-5 "></i>
          <span className="text-[1rem] font-medium ml-5 tracking-tight	">Trevilo</span>
        </motion.div>
        <div className="flex flex-row gap-10 text-sm w-8/12 justify-center">
          <button>Home</button>
          <button>About Us</button>
          <button>Service</button>
          <button>Pricing</button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: [-90] }}
          animate={{ opacity: 1, x: [255, 0] }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 50,
            delay: 2,
          }}
          className="flex flex-row gap-2 w-2/12 justify-end"
        >
          <button className="py-2 px-4 rounded-3xl font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out">Signup</button>
          <button className="py-2 px-4 rounded-3xl font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out">Login</button>
        </motion.div>
      </motion.div>
    </main>
  );
}
