import { LoveThis } from "./love-this";
import imageInterstellar from "./interstellar.jpg";
import imageMurph from "./murph.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col space-y-12 overflow-hidden bg-background p-14 pt-24 text-xl leading-relaxed">
      <Image
        src={imageInterstellar}
        alt="Interstellar cover"
        placeholder="blur"
        className="h-auto w-48 rounded-3xl drop-shadow-[0_0px_35px_rgba(72,117,129,0.4)]"
      />

      <div className="space-y-3">
        <h1 className="text-4xl">Interstellar</h1>
        <div className="flex gap-3">
          <Image src={imageMurph} alt="Murph" className="size-8 rounded-full" />
          <p className="font-medium">Murph</p>
          <p className="text-muted-foreground">@jessicachastain</p>
        </div>
        <p className="text-lg text-muted-foreground">October 26, 2014</p>
      </div>

      <div className="max-w-md space-y-8">
        <p>
          Sometimes I just need to see the start. Or end. Or a trailer. Or the
          music and theme from Hans Zimmer. Or the whole movie. Just to feel
          that thing, I only get from this movie. That the earth, space and time
          are something special, mystical.
        </p>
        <p>
          I never forget the first time I saw this movie, in an IMAX theatre in
          2014. I was struck by it. Totally got me. And it stil does, 7 years
          later. This is the best movie ever made for me. Because of the feeling
          it gives me, no other movie can. So hard to get all of this emotion in
          only one movie. Brilliant.
        </p>
        <p>
          In the near future around the American Midwest, Cooper, an ex-science
          engineer and pilot, is tied to his farming land with his daughter
          Murph and son Tom. As devastating sandstorms ravage Earth's crops, the
          people of Earth realize their life here is coming to an end as food
          begins to run out. Eventually stumbling upon a N.A.S.A. base 6 hours
          from Cooper's home, he is asked to go on a daring mission with a few
          other scientists into a wormhole because of Cooper's scientific
          intellect and ability to pilot aircraft unlike the other crew members.
          In order to find a new home while Earth decays, Cooper must decide to
          either stay, or risk never seeing his children again in order to save
          the human race by finding another habitable planet.
        </p>
      </div>

      <LoveThis />
    </main>
  );
}
