import Image from "next/image";
import Link from "next/link";

import { HeroImage } from "@/components/HeroImage";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <HeroImage
      ShadowProps={{
        className: "bg-black/60",
      }}
    >
      <header className="xl:pl-40">
        <Link href="/" className="block w-[200px]">
          <Image
            src="/images/netflix-logo.webp"
            alt="Logo de Netflix"
            height={200}
            width={200}
          />
        </Link>
      </header>
      <article className="flex flex-col items-center justify-center">
        <LoginForm />
      </article>
    </HeroImage>
  );
}
