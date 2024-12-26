import Image from "next/image";
import { HeroImage } from "@/components/HeroImage";
import { Trending } from "@/components/Trending";

export default function Home() {
  return (
    <section className="p-5 lg:p-0">
      <HeroImage>
        <header className="flex items-center justify-between lg:px-40">
          <Image
            src="/images/netflix-logo.webp"
            alt="Logo de Netflix"
            height={200}
            width={200}
          />
          <a
            href=""
            className="bg-brand-red px-4 py-[6px] rounded-md font-bold text-sm"
          >
            Iniciar sesión
          </a>
        </header>

        <article className="flex flex-col items-center justify-center mt-40">
          <p className="lg:text-6xl text-3xl font-bold lg:w-[600px] min-w-80 text-center">
            Películas y series ilimitadas y mucho más
          </p>
        </article>
      </HeroImage>

      <section className="mt-[18rem]">
        <Trending />
      </section>
    </section>
  );
}
