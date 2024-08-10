"use client";

import Image, { type StaticImageData } from "next/image";
import imageIphone from "./iphone.png";
import imageCase from "./case.png";
import imageSaltFlats from "./salt-flats.jpg";
import imageMexico from "./mexico.jpg";
import imageCouple from "./couple.jpg";
import imageBeach from "./beach.jpg";
import React from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { Ellipsis, Heart, Images, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Progress } from "@/components/ui/progress";

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

      <motion.div
        layoutId={props.title + "album-wrapper"}
        className="relative -mt-1 aspect-square w-full"
      >
        <motion.div className="relative translate-y-4">
          <Image src={imageCase} alt="CD case" className="relative z-10" />
          <motion.div
            // layoutId={props.title + "album-record"}
            className="absolute left-[42px] top-[14px] z-40 aspect-square w-4/5 overflow-hidden rounded-full drop-shadow-md"
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
        </motion.div>
        <div className="absolute bottom-7 left-1/2 h-12 w-2/3 -translate-x-1/2 rounded-t-lg bg-white/30 shadow-[0_-6px_6px_3px_rgba(0,0,0,0.06)] backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 h-6 w-full rounded-[2px] bg-gradient-to-br from-[#c1c1c1] from-20% to-[#929292] shadow-[0_-3px_8px_4px_rgba(0,0,0,0.15)] blur-[0.3px]" />
      </motion.div>

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
  const controls = useDragControls();
  const albumY = useMotionValue(0);
  const [albumStatus, setAlbumStatus] = React.useState<
    "idle" | "inserted" | "loading" | "done"
  >("done");

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        ctx.setFocusedCard("");
        setAlbumStatus("idle");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [ctx.setFocusedCard, setAlbumStatus]);

  React.useEffect(() => {
    if (albumStatus === "inserted") {
      const timeout = setTimeout(() => setAlbumStatus("loading"), 1000);
      return () => clearTimeout(timeout);
    }
    if (albumStatus === "loading") {
      const timeout = setTimeout(() => setAlbumStatus("done"), 2500);
      return () => clearTimeout(timeout);
    }
  }, [albumStatus, setAlbumStatus]);

  return (
    <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0 }}>
      <AnimatePresence initial={false}>
        {ctx.focusedCardTitle !== "" && focusedCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId={ctx.focusedCardTitle + "container"}
              className="size-full fixed left-0 top-0 z-10 flex items-center justify-center overflow-hidden rounded-[44px] bg-[#ececec]"
            />
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="absolute bottom-[310px] z-40 h-[400px] w-full px-12"
            >
              <AnimatePresence>
                {(albumStatus === "loading" || albumStatus === "done") && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-8 left-0 flex w-full justify-center font-mono text-[12px] font-bold uppercase text-foreground/70"
                  >
                    {`${focusedCard.year} ${focusedCard.title}`}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="size-full flex flex-col space-y-2 rounded-lg border border-background/20 bg-gradient-to-br from-[#ffffff] via-[#dcdcdc] to-[#ffffff] p-2 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.2)] blur-[0.3px]">
                <div className="relative flex flex-1 items-center justify-center rounded bg-[#2c2c2c] shadow-[inset_0_6px_12px_rgba(0,0,0,1)]">
                  <AnimatePresence mode="popLayout">
                    {albumStatus === "loading" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4"
                      >
                        <div className="relative p-2">
                          <div className="size-full absolute left-0 top-0 z-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#6a6a6e] from-10% via-[#ecedec] to-[#6a6a6e] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.2)] blur-[0.3px]" />
                          <Image
                            src={focusedCard.image}
                            alt={focusedCard.title}
                            className="size-full relative z-30 aspect-square animate-[spin_3s_linear_infinite] rounded-full object-cover object-right shadow-[0_6px_6px_-3px_rgba(0,0,0,0.2)]"
                          />
                          <div className="size-full absolute left-0 top-0 z-30 flex items-center justify-center backdrop-blur-[0.5px]">
                            <div className="size-6 rounded-full bg-[#241b16] shadow" />
                          </div>
                        </div>
                        <div className="size-full absolute left-0 top-0 z-40 bg-gradient-to-b from-[#dbdbdb]/60 to-[#dbdbdb]/10" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode="popLayout">
                    {albumStatus === "done" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="size-full relative"
                      >
                        <Image
                          src={focusedCard.image}
                          alt={focusedCard.title}
                          className="size-full object-cover"
                        />

                        <div className="size-full absolute left-0 top-0 rounded shadow-[inset_0_6px_12px_rgba(0,0,0,0.2)]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div
                  className={cn(
                    "flex h-1/5 w-full items-center justify-center rounded bg-[#cecece] p-3 text-sm shadow-[inset_0_3px_6px_rgba(0,0,0,0.2)]",
                    {
                      "items-start": albumStatus === "done",
                    },
                  )}
                >
                  <AnimatePresence>
                    {albumStatus === "loading" ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-1.5 font-mono text-[12px] font-bold uppercase text-foreground/70"
                      >
                        Loading
                        <div className="flex items-center gap-1">
                          <div className="size-[3px] rounded-full bg-foreground" />
                          <div className="size-[3px] rounded-full bg-foreground" />
                          <div className="size-[3px] rounded-full bg-foreground" />
                        </div>
                      </motion.div>
                    ) : albumStatus === "done" ? (
                      <div className="flex w-full flex-col">
                        <div className="flex w-full items-start justify-between">
                          <div className="leading-none">
                            <p className="font-semibold">Dominoes</p>
                            <p>Jungle</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="size-3" />
                            <Ellipsis className="size-3" />
                          </div>
                        </div>

                        <Progress
                          value={33}
                          className="mt-2 h-1 bg-[#b1afb1]"
                        />

                        <div className="flex w-full items-center justify-between text-[8px]">
                          <p>0 : 35</p>
                          <p>-2 : 44</p>
                        </div>
                      </div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <div className="size-full fixed left-0 top-0 z-10 flex items-center justify-center overflow-hidden rounded-[44px]">
              <motion.div
                layoutId={ctx.focusedCardTitle + "album-wrapper"}
                transition={{ delay: 0 }}
                initial={{ filter: "blur(6px)" }}
                exit={{ filter: "blur(6px)" }}
                animate={
                  albumStatus !== "idle"
                    ? {
                      bottom: 320,
                      filter: "blur(2px)",
                      transition: { duration: 0.4 },
                    }
                    : { filter: "blur(0px)" }
                }
                style={{ y: albumY }}
                drag="y"
                dragControls={controls}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                dragElastic={{
                  bottom: 0,
                  top: 0.8,
                }}
                dragListener={false}
                onDragEnd={() => {
                  if (albumY.get() <= -130) {
                    setAlbumStatus("inserted");
                  }
                }}
                className="size-[240px] absolute bottom-20 z-30 flex flex-col items-center border border-background/20 bg-gradient-to-br from-[#cacaca] from-10% via-[#eeeeee] to-[#dfdfdf] p-4 shadow-inner blur-[0.3px] drop-shadow-md"
              >
                <div className="relative p-2">
                  <div className="size-full absolute left-0 top-0 z-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#6a6a6e] from-10% via-[#ecedec] to-[#6a6a6e] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.2)] blur-[0.3px]" />
                  <Image
                    src={focusedCard.image}
                    alt={focusedCard.title}
                    className="size-full relative z-30 aspect-square rounded-full object-cover object-right shadow-[0_6px_6px_-3px_rgba(0,0,0,0.2)]"
                  />
                  <div className="size-full absolute left-0 top-0 z-30 flex items-center justify-center backdrop-blur-[0.5px]">
                    <div className="size-6 rounded-full bg-[#241b16] shadow" />
                  </div>
                </div>
                <button
                  onPointerDown={(e) => controls.start(e)}
                  style={{ touchAction: "none" }}
                  className="absolute bottom-1 h-1 w-10 rounded-full bg-[#bbbbbb] shadow-md"
                />
              </motion.div>
            </div>
          </>
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
    </MotionConfig>
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
  // const [focusedCardTitle, setFocusedCard] = React.useState("");
  const [focusedCardTitle, setFocusedCard] = React.useState(
    "Salt Lake City, Utah",
  );
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
              <div className="pointer-events-none absolute -top-px z-40 h-28 w-full rounded-t-[44px] bg-gradient-to-b from-[#dbdbdb]/80 to-transparent" />
              <div
                className={cn(
                  styles["blur-down"],
                  "pointer-events-none absolute -top-px z-40 h-20 w-full rounded-t-[44px]",
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
                  "pointer-events-none absolute -bottom-px z-10 h-20 w-full rounded-b-[44px]",
                )}
              />
              <div className="pointer-events-none absolute -bottom-px z-10 h-28 w-full rounded-b-[44px] bg-gradient-to-t from-[#dbdbdb]/80 from-10% to-transparent" />
            </div>

            <div className="fixed bottom-[72px] left-1/2 z-50 h-1.5 w-[360px] -translate-x-1/2 px-28">
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
