import Image, { type StaticImageData } from "next/image";
import imageIphone from "./iphone.png";
import imageCase from "./case.png";
import imageBeach from "./beach.jpg";
import React from "react";

function AlbumnCard(props: {
  image: StaticImageData;
  year: string;
  title: string;
  time: string;
}) {
  return (
    <div className="group rounded p-4 pb-5 transition-all duration-500 hover:bg-[#ececec] hover:shadow-[0_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="space-y-3 font-mono text-[8px] font-medium uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <p>
            Albumn travelling time{" "}
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
          <p>Currated by Gabbi Soong</p>
        </div>
      </div>

      <div className="relative -mt-1 aspect-square w-full">
        <div className="relative translate-y-4">
          <Image src={imageCase} alt="CD case" className="relative z-10" />
          <div className="absolute left-[42px] top-[14px] z-0 aspect-square w-4/5 overflow-hidden rounded-full drop-shadow-md">
            <Image
              src={props.image}
              alt={props.title}
              className="size-full object-cover object-right"
            />
            <div className="size-full absolute left-0 top-0 flex items-center justify-center backdrop-blur-[0.5px]">
              <div className="size-6 rounded-full bg-[#241b16] shadow" />
            </div>
          </div>
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
  return (
    <div className="size-full text no-scrollbar space-y-8 overflow-y-scroll rounded-[44px] bg-[#dbdbdb] px-4 pb-40 pt-8 text-[#1b1b1b]">
      <AlbumnCard
        time="10:40"
        year="2023"
        title="Santorini, Greece"
        image={imageBeach}
      />
      <AlbumnCard
        time="10:40"
        year="2023"
        title="Santorini, Greece"
        image={imageBeach}
      />
      <AlbumnCard
        time="10:40"
        year="2023"
        title="Santorini, Greece"
        image={imageBeach}
      />
    </div>
  );
}

export default function StagingPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="relative aspect-square h-screen bg-[#dbdbdb]">
        {/* <div className="absolute left-1/2 top-1/2 z-0 h-[893px] w-[412px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-pink-100"> */}
        <div className="absolute left-1/2 top-1/2 z-10 h-[817px] w-[375px] -translate-x-1/2 -translate-y-1/2">
          <InnerContent />
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
  );
}
