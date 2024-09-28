"use client";
import { motion } from "framer-motion";

export const FadeInEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={
        className
          ? className
          : "relative flex flex-col gap-4 items-center justify-center px-4"
      }
    >
      {children}
    </motion.div>
  );
};
