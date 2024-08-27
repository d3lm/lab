"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React from "react";
import Image from "next/image";
import imagePerson from "@/assets/person.jpg";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  const [open, setOpen] = React.useState(true);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.8 }}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-screen items-center justify-center"
      >
        <motion.div
          initial={{ backdropFilter: "blur(0px)" }}
          animate={
            open
              ? {
                  backdropFilter: "blur(14px)",
                  backgroundColor: "rgb(0 0 0 / 0.4)",
                }
              : {}
          }
          className="size-full absolute left-0 top-0"
        />
      </div>
    </MotionConfig>
  );
}
