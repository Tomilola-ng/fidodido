"use client";

import Image from "next/image";
import LinkBtn from "../reusables/LinkBtn";

import fidoGuy from "/public/character.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center w-full max-w-screen-md mx-auto my-6">
      <div className="gap-y-4 flexCenter md:items-start flex-col">
        <h1 className="text-2xl md:text-3xl font-bold text-balance leading-8 text-center md:text-left">
          Empowering Startups with Innovative Business Solutions
        </h1>
        <p className="text-pretty text-center md:text-left">
          We offer services ranging from digital marketing, recruitment, web
          services, and cloud accounting. We provide tailored solutions that
          leverage technology and expertise, helping startups thrive in today
          {"'"}s competitive landscape.
        </p>
        <LinkBtn
          msg="Book a Session"
          url="https://calendly.com/fidoafrica/consultation"
        />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0, rotate: 20 }}
          animate={{ y: 0, opacity: 100, rotate: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeIn",
          }}
          className=""
        >
          <Image src={fidoGuy} alt="FIDO DIDO" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
