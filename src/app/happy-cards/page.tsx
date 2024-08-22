"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import imageBird from "@/assets/bird.jpg";
import imageTiger from "@/assets/tiger.jpg";
import imageFish from "@/assets/fish.jpg";
import imageMonkey from "@/assets/monkey.jpg";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import svgPhone from "./iphone-black.svg";
import { cn } from "@/lib/utils";

const cards = [
  {
    id: "bird",
    image: imageBird,
    title: `Freedom Has\nNo Bounds\nFor You`,
    color: "#374a36",
  },
  {
    id: "tiger",
    image: imageTiger,
    title: `Fierce Beyond\nComprehension`,
    color: "#fff",
  },
  {
    id: "monkey",
    image: imageMonkey,
    title: `Wisdom Triumphs\nOver Trivialities`,
    color: "#000",
  },
  {
    id: "fish",
    image: imageFish,
    title: `Tranquility Fills\nYour Heart`,
    color: "#666",
  },
];

type Card = (typeof cards)[0];

function AnimalCard(props: {
  card: Card;
  setActive: React.Dispatch<React.SetStateAction<Card | null>>;
}) {
  return (
    <motion.div
      layoutId={`container-${props.card.id}`}
      whileHover={{ scale: 1.05 }}
      custom={{ open }}
      data-open={open}
      onClick={() => props.setActive(props.card)}
      className={cn(
        "relative h-[150px] w-[150px] overflow-hidden rounded-[24px] data-[open=false]:shadow-[-16px_-16px_64px_-32px_rgba(56,76,55,1),0_32px_64px_-32px_rgba(53,113,201,0.8),32px_0_64px_-32px_rgba(153,170,4,0.6)]",
      )}
    >
      <motion.div layoutId={`image-${props.card.id}`} className="size-full">
        <Image
          src={props.card.image}
          alt={props.card.id}
          className="size-full object-cover"
        />
      </motion.div>

      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-0 left-0 h-1/2 w-full rounded-b-[24px] bg-transparent backdrop-blur-md [mask:linear-gradient(0deg,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]"
        />

        <div className="absolute bottom-4 left-4 space-y-1.5">
          <motion.p
            layoutId={`title-${props.card.id}`}
            className="text whitespace-pre-wrap font-medium leading-tight text-white"
          >
            {props.card.title}
          </motion.p>
        </div>
      </>
    </motion.div>
  );
}

function InnerContent() {
  const [active, setActive] = React.useState<Card | null>(null);
  const [closeHovered, setCloseHovered] = React.useState(false);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}>
      <div className="relative flex h-full flex-col items-center justify-center rounded-[51px]">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, y: 5 }}
              className="fixed left-0 top-4 z-50 flex w-full justify-end px-8"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={
                    closeHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 5 }
                  }
                >
                  <p className="rounded-full bg-[#374a36]/30 bg-white px-2 py-0.5 text-[12px] font-medium text-[#1b2522]">
                    Close
                  </p>
                </motion.div>
                <motion.div
                  onHoverStart={() => setCloseHovered(true)}
                  onHoverEnd={() => setCloseHovered(false)}
                  onClick={() => {
                    setActive(null);
                    setCloseHovered(false);
                  }}
                >
                  <X className="size-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <motion.div
              layoutId={`container-${active.id}`}
              animate={
                closeHovered
                  ? {
                      scaleX: 0.95,
                      scaleY: 0.975,
                    }
                  : {}
              }
              custom={{ open }}
              data-open={open}
              className="size-full relative z-40 overflow-hidden rounded-[51px] data-[open=false]:shadow-[-16px_-16px_64px_-32px_rgba(56,76,55,1),0_32px_64px_-32px_rgba(53,113,201,0.8),32px_0_64px_-32px_rgba(153,170,4,0.6)]"
            >
              <motion.div layoutId={`image-${active.id}`} className="size-full">
                <Image
                  src={active.image}
                  alt={active.id}
                  className="size-full object-cover"
                />
              </motion.div>

              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-0 h-1/5 w-full rounded-t-[24px] bg-transparent backdrop-blur-md [mask:linear-gradient(180deg,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_100%)]"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-0 h-full w-1/5 rounded-l-[24px] bg-transparent backdrop-blur-md [mask:linear-gradient(90deg,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_100%)]"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-0 h-full w-1/5 rounded-l-[24px] bg-transparent backdrop-blur-md [mask:linear-gradient(270deg,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_100%)]"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-0 left-0 h-1/2 w-full rounded-b-[24px] bg-transparent backdrop-blur-md [mask:linear-gradient(0deg,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  custom={{ open }}
                  className="absolute left-0 top-0 h-1/4 w-full bg-gradient-to-b from-black/90"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  custom={{ open }}
                  className="absolute bottom-0 left-0 h-1/4 w-full bg-gradient-to-t from-black/90"
                />

                <div className="absolute bottom-24 left-6 space-y-3">
                  <motion.p
                    layoutId={`title-${active.id}`}
                    className="whitespace-pre-wrap text-2xl font-medium leading-tight text-white"
                  >
                    {active.title}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-medium uppercase tracking-wider text-white/60"
                  >
                    Discover who you truly are
                  </motion.p>
                </div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-8 flex w-full flex-wrap gap-6 px-6">
          {cards.map((card) => (
            <AnimalCard key={card.id} card={card} setActive={setActive} />
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}

export default function HappyCardsPage() {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.5 }}>
      <main className="flex h-screen select-none items-center justify-center overflow-hidden">
        <div className="relative flex aspect-square h-screen items-center justify-center bg-gradient-to-br from-[#eae8eb]/70 to-[#dde1eb]">
          <div className="absolute left-1/2 top-1/2 z-20 h-[813px] w-[376px] -translate-x-1/2 -translate-y-1/2">
            <InnerContent />
          </div>

          <div className="fixed bottom-[72px] left-1/2 z-50 h-1.5 w-[360px] -translate-x-1/2 px-28">
            <div className="size-full rounded-3xl bg-black" />
          </div>

          <Image
            src={svgPhone}
            alt="iphone mock"
            className="pointer-events-none relative z-30"
          />
        </div>
      </main>
    </MotionConfig>
  );
}
