"use client";

import Image, { type StaticImageData } from "next/image";
import imageIphone from "./iphone.png";
import imageCase from "./case.png";
import imageSaltFlats from "./salt-flats.jpg";
import imageMexico from "./mexico.jpg";
import imageCouple from "./couple.jpg";
import imageBeach from "./beach.jpg";
import React from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Heart, Images, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

const albums = [
  {
    time: "12:28",
    year: "2022",
    title: "Salt Lake City, Utah",
    image: imageSaltFlats,
  },
  {
    time: "14:58",
    year: "2022",
    title: "Tulum, Mexico",
    image: imageMexico,
  },
  {
    time: "09:10",
    year: "2023",
    title: "San Diego, California",
    image: imageCouple,
  },
  {
    time: "10:40",
    year: "2023",
    title: "Santorini, Greece",
    image: imageBeach,
  },
];

function AlbumCard(props: {
  image: StaticImageData;
  year: string;
  title: string;
  time: string;
}) {
  const ctx = React.useContext(StagingContext);

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        ctx.setFocusedCard("");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [ctx.setFocusedCard]);

  return (
    <div
      onMouseOver={() => ctx.setActiveCard(props.title)}
      onClick={() => {
        if (ctx.activeCard === props.title) {
          ctx.setFocusedCard(props.title);
          return;
        }
        ctx.setActiveCard(props.title);
      }}
      onMouseLeave={() => ctx.setActiveCard("")}
      className="group rounded p-4 pb-5 transition-colors duration-500 hover:bg-[#ececec] hover:shadow-[0_24px_24px_-12px_rgba(0,0,0,0.06)]"
    >
      <div className="space-y-3 font-mono text-[8px] font-medium uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <p>
            Album travelling time{" "}
            <span className="font-black">{props.time}</span>
          </p>
          <p>
            Photos take on family trip in{" "}
            <span className="font-black">May 2023</span>
          </p>
        </div>
        <div>
          <p>
            Taken on <span className="font-black">Konica AF3</span>
          </p>
          <p>
            Shot on <span className="font-black">35 MM</span>
          </p>
        </div>
        <div>
          <p>Currated by gabbi @glyphg0rl</p>
        </div>
      </div>

      <div className="relative -mt-1 aspect-square w-full">
        <div className="relative translate-y-4">
          <Image src={imageCase} alt="CD case" className="relative z-10" />
          <motion.div
            layoutId={props.title + "album-record"}
            className="absolute left-[42px] top-[14px] z-0 aspect-square w-4/5 overflow-hidden rounded-full drop-shadow-md"
          >
            <Image
              src={props.image}
              alt={props.title}
              className="size-full object-cover object-right shadow-[0_6px_6px_-3px_rgba(0,0,0,0.1)]"
            />
            <div className="size-full absolute left-0 top-0 flex items-center justify-center backdrop-blur-[0.5px]">
              <div className="size-6 rounded-full bg-[#241b16] shadow" />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-7 left-1/2 h-12 w-2/3 -translate-x-1/2 rounded-t-lg bg-white/30 shadow-[0_-6px_6px_3px_rgba(0,0,0,0.06)] backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 h-6 w-full rounded-[2px] bg-gradient-to-br from-[#c1c1c1] from-20% to-[#929292] shadow-[0_-3px_8px_4px_rgba(0,0,0,0.15)] blur-[1px]" />
      </div>

      <h3 className="pt-4 text-xl tracking-tight opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="pr-[1ch] font-bold">{props.year}</span>
        {props.title}
      </h3>
    </div>
  );
}

function InnerContent() {
  const ctx = React.useContext(StagingContext);
  const focusedCard = albums.find(
    (album) => album.title === ctx.focusedCardTitle,
  );

  return (
    <>
      <AnimatePresence>
        {ctx.focusedCardTitle !== "" && focusedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId={ctx.focusedCardTitle + "container"}
            className="size-full fixed left-0 top-0 z-10 flex items-center justify-center rounded-[44px] bg-[#ececec]"
          >
            <motion.div
              layoutId={ctx.focusedCardTitle + "album-record"}
              className="size-[248px] absolute z-0 aspect-square drop-shadow-md"
            >
              <Image
                src={focusedCard.image}
                alt={focusedCard.title}
                className="size-full rounded-full object-cover  object-right shadow-[0_6px_6px_-3px_rgba(0,0,0,0.1)]"
              />
              <div className="size-full absolute left-0 top-0 flex items-center justify-center backdrop-blur-[0.5px]">
                <div className="size-6 rounded-full bg-[#241b16] shadow" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="size-full text no-scrollbar relative space-y-8 overflow-y-scroll rounded-[44px] bg-[#dbdbdb] px-4 pb-40 pt-24 text-[#1b1b1b]">
        {albums.map((album) => (
          <AlbumCard
            time={album.time}
            year={album.year}
            title={album.title}
            image={album.image}
          />
        ))}
      </div>
    </>
  );
}

const StagingContext = React.createContext<{
  activeCard: string;
  setActiveCard: React.Dispatch<React.SetStateAction<string>>;
  focusedCardTitle: string;
  setFocusedCard: React.Dispatch<React.SetStateAction<string>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  activeCard: "",
  setActiveCard: () => null,
  focusedCardTitle: "",
  setFocusedCard: () => null,
  showMenu: false,
  setShowMenu: () => null,
});

export default function StagingPage() {
  const [activeCard, setActiveCard] = React.useState("");
  const [focusedCardTitle, setFocusedCard] = React.useState("");
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    if (activeCard !== "") {
      const showTimeout = setTimeout(() => setShowMenu(true), 1000);
      return () => clearTimeout(showTimeout);
    }

    const hideTimeout = setTimeout(() => setShowMenu(false), 1000);
    return () => clearTimeout(hideTimeout);
  }, [activeCard, setShowMenu]);

  return (
    <StagingContext.Provider
      value={{
        activeCard,
        setActiveCard,
        focusedCardTitle,
        setFocusedCard,
        showMenu,
        setShowMenu,
      }}
    >
      <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.5 }}>
        <main className="flex h-screen items-center justify-center overflow-hidden">
          <div className="relative aspect-square h-screen bg-[#dbdbdb]">
            <div className="absolute left-1/2 top-1/2 z-10 h-[810px] w-[375px] -translate-x-1/2 -translate-y-1/2">
              <div className="pointer-events-none absolute -top-px z-10 h-28 w-full rounded-t-[44px] bg-gradient-to-b from-[#dbdbdb]/80 to-transparent" />
              <div
                className={cn(
                  styles["blur-down"],
                  "pointer-events-none absolute -top-px z-10 h-20 w-full rounded-t-[44px]",
                )}
              />

              <InnerContent />

              <AnimatePresence>
                {showMenu && focusedCardTitle === "" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: "-50%",
                      y: 10,
                      filter: "blur(6px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: "-50%",
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: "-50%",
                      y: 10,
                      filter: "blur(6px)",
                    }}
                    className="absolute bottom-12 left-1/2 z-20 flex w-4/5 justify-between rounded-full bg-[#848484]/60 px-8 py-2 text-[12px] text-background shadow-[0_24px_24px_-12px_rgba(0,0,0,0.3)] backdrop-blur-md"
                  >
                    <div className="flex w-full flex-col items-center gap-1">
                      <Heart className="size-5" />
                      <p>From Friends</p>
                    </div>
                    <div className="flex w-full flex-col items-center gap-1">
                      <Images className="size-5" />
                      <p>My Albums</p>
                    </div>
                    <div className="flex w-full flex-col items-center gap-1">
                      <Search className="size-5" />
                      <p>Search</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                className={cn(
                  styles["blur-up"],
                  "pointer-events-none absolute -bottom-px z-10 h-40 w-full rounded-b-[44px]",
                )}
              />
              <div className="pointer-events-none absolute -bottom-px z-10 h-40 w-full rounded-b-[44px] bg-gradient-to-t from-[#dbdbdb]/80 from-10% to-transparent" />
            </div>

            <div className="fixed bottom-[72px] left-1/2 z-20 h-1.5 w-[360px] -translate-x-1/2 px-28">
              <div className="size-full rounded-3xl bg-black" />
            </div>

            <Image
              src={imageIphone}
              alt="iphone mock"
              className="absolute left-1/2 top-0 z-0 h-screen w-auto -translate-x-1/2"
            />
          </div>
        </main>
      </MotionConfig>
    </StagingContext.Provider>
  );
}
