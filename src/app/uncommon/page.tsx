"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Transition,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import logoUncommon from "@/assets/uncommon.png";
import logoVaun from "@/assets/vaun-logo.png";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 };

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  sidebarDropdownOpen: boolean;
  setSidebarDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  status: "",
  setStatus: () => null,
  sidebarDropdownOpen: false,
  setSidebarDropdownOpen: () => null,
});

function SidebarHeader() {
  const ctx = React.useContext(Context);
  const open = ctx.sidebarDropdownOpen;

  return (
    <motion.div
      initial={{ scale: 1, filter: "blur(0px)" }}
      animate={open ? { scale: 0.98, filter: "blur(6px)" } : {}}
      className="flex justify-between pl-2"
    >
      <div className="flex items-center gap-2">
        <ChevronLeft className="size-4" />
        <p className="text-sm">Home</p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={logoUncommon}
          alt="uncommon logo"
          className="size-7 rounded-lg"
        />
        <Image
          src={logoVaun}
          alt="vaunblu logo"
          className="size-7 rounded-full"
        />
      </div>
    </motion.div>
  );
}

function SidebarDropdown() {
  const ctx = React.useContext(Context);
  const { sidebarDropdownOpen: open, setSidebarDropdownOpen: setOpen } = ctx;
  const [value, setValue] = React.useState("logo");

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <div className="group cursor-pointer">
          <motion.button
            data-state={open ? "open" : "closed"}
            className="group flex w-fit items-center justify-start gap-2 rounded-full px-2.5 py-1 text-3xl font-medium capitalize tracking-tighter transition ease-out focus:bg-[#202020] focus:outline-none focus:ring-1 focus:ring-white/10 group-hover:bg-[#202020] group-hover:outline-none group-hover:ring-1 group-hover:ring-white/10 data-[state=open]:bg-[#202020] data-[state=open]:ring-1 data-[state=open]:ring-white/10"
          >
            {value}
            <ChevronRight
              strokeWidth={3}
              data-state={open ? "open" : "closed"}
              className="size-6 mt-1 rotate-90 text-white/10 transition ease-out group-hover:text-white/70 group-focus:text-white/70 data-[state=open]:rotate-0"
            />
          </motion.button>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal forceMount>
        <AnimatePresence>
          {open && (
            <DropdownMenu.Content
              onCloseAutoFocus={(e) => e.preventDefault()}
              sideOffset={8}
              align="start"
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                className="flex w-72 flex-col gap-1 text-[#c6c6c6]"
              >
                <DropdownMenu.Item
                  onSelect={() => setValue("name")}
                  disabled={value === "name"}
                  asChild
                >
                  <div
                    data-disabled={value === "name" ? "true" : "false"}
                    className="group w-full cursor-pointer focus:outline-none data-[disabled=true]:cursor-default"
                  >
                    <motion.button
                      type="button"
                      aria-label="Name"
                      disabled={value === "name"}
                      className="flex w-fit justify-start rounded-full px-2.5 py-1 text-3xl font-medium capitalize tracking-tighter transition ease-out disabled:pointer-events-none disabled:opacity-40 group-focus:bg-[#202020] group-focus:outline-none group-focus:ring-1 group-focus:ring-white/10"
                    >
                      Name
                    </motion.button>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => setValue("logo")}
                  disabled={value === "logo"}
                  asChild
                >
                  <div
                    data-disabled={value === "logo" ? "true" : "false"}
                    className="group w-full cursor-pointer focus:outline-none data-[disabled=true]:cursor-default"
                  >
                    <motion.button
                      type="button"
                      aria-label="Logo"
                      disabled={value === "logo"}
                      className="flex w-fit justify-start rounded-full px-2.5 py-1 text-3xl font-medium capitalize tracking-tighter transition ease-out disabled:pointer-events-none disabled:opacity-40 group-focus:bg-[#202020] group-focus:outline-none group-focus:ring-1 group-focus:ring-white/10"
                    >
                      Logo
                    </motion.button>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => setValue("deck")}
                  disabled={value === "deck"}
                  asChild
                >
                  <div
                    data-disabled={value === "deck" ? "true" : "false"}
                    className="group w-full cursor-pointer focus:outline-none data-[disabled=true]:cursor-default"
                  >
                    <motion.button
                      type="button"
                      aria-label="Deck"
                      disabled={value === "deck"}
                      className="flex w-fit justify-start rounded-full px-2.5 py-1 text-3xl font-medium capitalize tracking-tighter transition ease-out disabled:pointer-events-none disabled:opacity-40 group-focus:bg-[#202020] group-focus:outline-none group-focus:ring-1 group-focus:ring-white/10"
                    >
                      Deck
                    </motion.button>
                  </div>
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function SidebarContent() {
  const ctx = React.useContext(Context);
  const open = ctx.sidebarDropdownOpen;

  return (
    <motion.div
      initial={{ scale: 1, filter: "blur(0px)" }}
      animate={open ? { scale: 0.98, filter: "blur(6px)" } : {}}
      className="space-y-7 text-sm"
    >
      <div className="space-y-3">
        <p className="text-sm text-white/30">Company</p>
        <input
          defaultValue="Building the iPhone before the iPhone"
          placeholder="Brief summary of your company"
          className="w-full rounded-xl bg-[#1f1f1f] px-3.5 py-3 placeholder:text-white/40"
        />
      </div>
      <div className="space-y-3">
        <p className="text-sm text-white/30">Inspiration</p>
        <div className="flex justify-between rounded-xl bg-[#1a1a1a] p-1">
          <div className="flex gap-1">
            <div className="rounded-[8px] bg-[#2c2c2c] px-3.5 py-3">Apple</div>
            <div className="rounded-[8px] bg-[#2c2c2c] px-3.5 py-3">Sony</div>
          </div>
          <button className="rounded-[8px] bg-[#252525]/80 px-3.5 py-3">
            Add
          </button>
        </div>
      </div>
      <div className="rounded-xl bg-[#1f1f1f]">
        <textarea
          placeholder="How do you want to adjust it?"
          className="w-full resize-none rounded-t-xl bg-[#1f1f1f] px-3.5 py-3 placeholder:text-white/40"
        />
        <div className="flex justify-end rounded-b-xl bg-[#1f1f1f] p-1">
          <div className="flex gap-1">
            <button className="rounded-[8px] px-3.5 py-3 transition hover:bg-[#252525]">
              <ImageIcon className="text-white/20" />
            </button>
            <button className="rounded-[8px] bg-[#252525]/80 px-3.5 py-3">
              Adjust
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Sidebar() {
  return (
    <div className="flex h-full w-80 flex-col justify-between space-y-5 p-7 pr-5">
      <div className="flex w-full flex-col space-y-5">
        <SidebarHeader />
        <SidebarDropdown />
      </div>
      <SidebarContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex h-full flex-1 flex-col p-2">
      <div className="flex flex-1 rounded-2xl bg-white p-4 shadow-[0_6px_6px_-3px_rgba(0,0,0,0.06)]">
        <p>Main content</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [status, setStatus] = React.useState("idle");
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = React.useState(false);

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
    <Context.Provider
      value={{ status, setStatus, sidebarDropdownOpen, setSidebarDropdownOpen }}
    >
      <MotionConfig transition={transition}>
        <main className="relative flex h-screen items-center justify-center bg-[#131313] text-[#c6c6c6]">
          <Sidebar />
          <MainContent />
        </main>
      </MotionConfig>
    </Context.Provider>
  );
}
