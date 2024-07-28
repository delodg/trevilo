"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients"
import CardPlaces from "./components/CardPlaces";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-50 gap-2">
      <motion.div
        initial={{ opacity: 0, y: [-90] }}
        animate={{ opacity: 1, y: [-255, 0] }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 50,
        }}
        className=" bg-center bg-[url('/bg-hero.jpg')] bg-cover w-full flex rounded-2xl"
      >
        <div className="flex flex-col bg-black/20 w-full  rounded-2xl">
          <Navbar />
          <div className="flex flex-col justify-center items-center ">
            <motion.div
              initial={{ opacity: 0, y: [-90] }}
              animate={{ opacity: 1, y: [-250, 0] }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 20,
                delay: 1.2,
              }}
            >
              <Hero />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Clients />
      <CardPlaces />
      {/* Acá colocar la otra sección */}
    </main>
  );
}
