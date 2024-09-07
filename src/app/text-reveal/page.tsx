"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  Variants,
  type Transition,
} from "framer-motion";
import React from "react";
import useMeasure from "react-use-measure";

const transition: Transition = { type: "spring", bounce: 0, duration: 1 };

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

const container: Variants = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.2 },
  },
};

const text: Variants = {
  enter: {
    rotateX: "90deg",
    translateY: -10,
    filter: "blur(4px)",
    opacity: 0,
    originY: "0%",
  },
  visible: {
    rotateX: "0deg",
    translateY: 0,
    filter: "blur(0px)",
    opacity: 1,
  },
  exit: {
    rotateX: "90deg",
    translateY: 10,
    filter: "blur(4px)",
    opacity: 0,
    originY: "100%",
  },
};

function InnerContent() {
  const ctx = React.useContext(Context);
  const [value, setValue] = React.useState("New Name");

  const letters = value.split("").map((letter) => (
    <motion.p variants={text} className="whitespace-pre">
      {letter}
    </motion.p>
  ));

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        onClick={() => {
          if (value === "New Name") setValue("Another Name");
          else setValue("New Name");
        }}
        key={value}
        variants={container}
        initial="enter"
        animate="visible"
        exit="exit"
        className="flex w-[500px] items-center justify-start font-mono text-7xl font-extrabold tracking-tight"
      >
        {letters}
      </motion.div>
    </AnimatePresence>
  );
}

export default function HomePage() {
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setStatus("idle");
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setStatus]);

  return (
    <Context.Provider value={{ status, setStatus }}>
      <MotionConfig transition={transition}>
        <main className="relative flex h-screen items-center justify-center">
          <InnerContent />
        </main>
      </MotionConfig>
    </Context.Provider>
  );
}
