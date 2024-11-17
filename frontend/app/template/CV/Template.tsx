"use client";

import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Heading from "./Heading";

const Template = () => {
  const {
    customize: { size, fontFamily, letterSpacing, color, fontSize },
  } = useSelector((state: RootState) => state.customization);

  const scaleValue =
    {
      // Fit: 1,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      80: 0.8,
      90: 0.9,
      100: 1,
      110: 1.1,
      120: 1.2,
    }[size] || 1;

  return (
    <motion.div
      animate={{ scale: scaleValue }}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-white max-w-[70rem] rounded-sm  w-full  min-h-[80rem] mx-auto ",
        size >= 110 ? "origin-top-left" : "origin-top"
      )}
    >
      <div>
        <Heading />
      </div>
    </motion.div>
  );
};
export default Template;
