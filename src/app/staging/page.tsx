import Image from "next/image";
import imageIphone from "./iphone.png";
import { Cards } from "../_components/cards";

function InnerContent() {
  return <Cards />;
}

export default function StagingPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="size-full relative">
        {/* <div className="absolute left-1/2 top-1/2 z-0 h-[893px] w-[412px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-pink-100"> */}
        <div className="absolute left-1/2 top-1/2 z-10 h-[788px] w-[364px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[44px] bg-white">
          <InnerContent />

          <div className="absolute bottom-3 left-1/2 z-20 h-1.5 w-full -translate-x-1/2 px-28">
            <div className="size-full rounded-3xl bg-black" />
          </div>
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
