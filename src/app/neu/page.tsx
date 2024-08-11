import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Italic, Link, Underline } from "@/components/icons";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function NeuToolbarPage() {
  return (
    <main className="flex h-screen items-center justify-center space-x-6 bg-[#393b3a] text-[#b1b1b1]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative max-w-xl px-12 text-xl">
          <p>
            Introducing the Bento Design System: Cards, ideal for website
            landing pages and app design.
          </p>
          <div className="size-full absolute left-0 top-0 bg-gradient-to-t from-[#393b3a]/90 to-transparent" />
        </div>

        <div
          className={cn(
            styles.toolbar,
            "relative flex w-full items-center gap-2 rounded-3xl border-l border-t border-[#4c4c4c]/60 p-2",
          )}
        >
          <button
            className={cn(
              styles["drop-down"],
              "flex h-12 items-center justify-center rounded-2xl px-8 font-semibold transition-all",
            )}
          >
            Heading 1
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl bg-transparent transition-all duration-300",
            )}
          >
            <span className="text-2xl font-extralight">B</span>
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <Italic />
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <Underline />
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <Link />
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <div className="size-6 rounded-full border-[0.7px] border-[#4c4c4c] bg-gradient-to-br from-[#d8d8d8] to-[#767676] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.15)]" />
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <AlignLeft />
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <AlignCenter />
          </button>
          <button
            className={cn(
              styles.button,
              "size-12 flex items-center justify-center rounded-2xl transition-all",
            )}
          >
            <AlignRight />
          </button>
        </div>
      </div>
    </main>
  );
}
