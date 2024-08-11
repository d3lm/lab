export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center space-x-6 bg-[#393b3a]">
      <div className="flex max-w-xl flex-col items-center gap-8">
        <div className="h-20 w-full rounded-2xl bg-[#2d2d2d]"></div>

        <div className="relative px-12 text-xl text-[#b1b1b1]">
          <p>
            Introducing the Bento Design System: Cards, ideal for website
            landing pages and app design.
          </p>

          <div className="size-full absolute left-0 top-0 bg-muted" />
        </div>
      </div>
    </main>
  );
}
