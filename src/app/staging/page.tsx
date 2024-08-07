import Image from "next/image";
import imageIphone from "./iphone.png";

export default function StagingPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="size-full relative">
        <div className="absolute left-1/2 top-1/2 z-0 h-[893px] w-[412px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-pink-100">
          <div className="pt-20">Test</div>
        </div>

        <Image
          src={imageIphone}
          alt="iphone mock"
          className="absolute left-1/2 top-0 z-10 h-screen w-auto -translate-x-1/2"
        />
      </div>
    </main>
  );
}
