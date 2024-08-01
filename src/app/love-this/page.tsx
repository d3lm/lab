import { LoveThis } from "./love-this";
import imageInterstellar from "./interstellar.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col space-y-12 overflow-hidden bg-background p-14 pt-24 text-lg leading-relaxed">
      <Image
        src={imageInterstellar}
        alt="Interstellar cover"
        placeholder="blur"
        className="h-auto w-40 rounded-2xl"
      ></Image>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nunc et
        tortor sodales feugiat. Curabitur orci lacus, varius vitae turpis quis,
        ultrices porta ipsum. Sed posuere quam ac lacinia eleifend. Ut ut nunc
        et enim faucibus pretium at eu quam. Integer quis est risus. Donec
        convallis, odio vel viverra vestibulum, felis nisl pulvinar lacus, et
        varius tortor est nec urna. Nulla fermentum tortor id tellus auctor, ut
        faucibus enim facilisis. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Sed porttitor elit ac maximus
        rutrum. Praesent id purus nulla. Proin fermentum vestibulum leo, ut
        molestie lorem blandit a. Ut enim leo, viverra et rhoncus in, cursus at
        massa. Vivamus ornare nulla convallis scelerisque sodales. Aenean id
        efficitur tortor. Ut lacus mauris, finibus sed odio eget, condimentum
        lacinia massa.
      </p>

      <p>
        Aliquam tempor euismod blandit. Mauris ut commodo dolor. Pellentesque
        sit amet venenatis mi. Vivamus tincidunt volutpat est, ac efficitur
        dolor imperdiet ac. Duis eu tristique purus, vitae bibendum erat. Cras
        eget elit sapien. Pellentesque maximus lobortis tempor. Etiam nec
        dignissim nulla. Nulla nec arcu eget est hendrerit elementum. Nunc
        auctor ipsum sit amet sem porta, non venenatis nunc egestas. Proin
        rutrum dui sed volutpat sagittis.
      </p>

      <p>
        Phasellus ullamcorper enim ut rhoncus aliquam. Nunc at sapien vitae
        risus sollicitudin mollis non ac magna. Nam dapibus urna aliquam blandit
        condimentum. Sed mollis ante ac lorem aliquet, ultrices aliquet lectus
        lacinia. Mauris porta sem vel diam commodo, at rhoncus dui rhoncus.
        Mauris sed consectetur velit, eget vulputate lorem. Mauris ultrices
        condimentum lacinia. Ut ut nulla et odio sollicitudin tincidunt et et
        orci. Vivamus non arcu varius, imperdiet purus et, posuere dolor. Sed id
        egestas ante, ut vestibulum ligula.
      </p>

      <p>
        Pellentesque purus tortor, faucibus non dignissim a, vestibulum id est.
        Suspendisse potenti. Integer commodo tellus id blandit sagittis.
        Suspendisse at ligula quis justo aliquet blandit. Maecenas sollicitudin
        aliquam eleifend. Etiam convallis lorem id mi dictum gravida. Curabitur
        laoreet ex vitae nisi tristique, nec egestas magna mollis. Morbi mattis
        sapien ut cursus pharetra. Sed posuere pretium pretium. Nam ullamcorper
        odio sit amet sem semper tincidunt. Donec mauris sapien, facilisis sit
        amet laoreet in, volutpat sed purus. Aliquam suscipit, orci pharetra
        semper pharetra, lacus elit lobortis erat, at hendrerit sem velit non
        felis.
      </p>

      <LoveThis />
    </main>
  );
}
