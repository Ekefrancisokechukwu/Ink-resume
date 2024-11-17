"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-[80vh] grid place-items-center">
        <div className="w-[40rem] mx-auto text-center">
          <h1 className="text-5xl font-bold">Build your perfect CV</h1>
          <p className="text-lg font-medium mt-5">
            Create a new standout CV in minutes or choose any template and
            simply import all the information from your existing CV.
          </p>

          <div className="flex items-center gap-x-7 mt-10 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3, type: "spring", damping: 7 }}
            >
              <Link
                href={"/template"}
                className="px-6 py-3 text-sm  hover:shadow-xl inline-block  rounded-full text-white font-medium bg-stone-900"
              >
                Start New CV
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3, type: "spring", damping: 7 }}
              className="px-6 py-3 text-sm  hover:shadow-xl rounded-full  font-medium bg-neutral-200"
            >
              Upload My CV
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}
