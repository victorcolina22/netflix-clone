import Image from "next/image";

// Components
import { HeroImage } from "@/components/HeroImage";
import { MoreReasonsToJoin } from "@/components/MoreReasonsToJoin";
import { RoundedLine } from "@/components/RoundedLine";

export default function Home() {
  return (
    <section>
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
        <RoundedLine />
        <article className="bg-black xl:px-36 lg:px-20 md:px-10 px-5 pb-20">
          <MoreReasonsToJoin />
        </article>
      </section>
    </section>
  );
}
