import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/cn";

export function LockedText({
  locked,
  children,
  className,
  blurClassName,
}: {
  locked: boolean;
  children: React.ReactNode;
  className?: string;
  blurClassName?: string;
}) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        {locked ? (
          <motion.span
            key="locked"
            className={cn("select-none opacity-60 blur-[8px]", blurClassName)}
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 0.6, filter: "blur(8px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-hidden="true"
          >
            {children}
          </motion.span>
        ) : (
          <motion.span
            key="unlocked"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

