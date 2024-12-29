import Image from "next/image";

// Components
import Link from "next/link";
import { HeroImage } from "@/components/HeroImage";
import { MoreReasonsToJoin } from "@/components/MoreReasonsToJoin";
import { Question } from "@/components/Question";
import { QuestionDescription } from "@/components/Question/components/QuestionDescription";
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
          <Link
            href="/login"
            className="bg-brand-red hover:bg-brand-red-hover px-4 py-[6px] rounded-md font-bold text-sm transition-colors"
          >
            Iniciar sesión
          </Link>
        </header>

        <article className="flex flex-col items-center justify-center mt-40">
          <p className="lg:text-6xl text-3xl font-bold lg:w-[600px] min-w-80 text-center">
            Películas y series ilimitadas y mucho más
          </p>
        </article>
      </HeroImage>

      <section className="mt-[18rem]">
        <RoundedLine />
        <article className="bg-black xl:px-36 lg:px-20 md:px-10 px-5">
          <MoreReasonsToJoin />
        </article>
      </section>

      <section className="xl:px-36 lg:px-20 md:px-10 px-5 mt-20 pb-20">
        <h3 className="text-2xl font-bold mb-5">Preguntas frecuentes</h3>
        <div className="flex flex-col gap-2">
          <Question
            title="¿Qué es Netflix?"
            description={
              <>
                <QuestionDescription>
                  Netflix es un servicio de streaming que ofrece una gran
                  variedad de películas, series y documentales premiados en casi
                  cualquier pantalla conectada a internet.
                </QuestionDescription>
                <QuestionDescription className="mt-5">
                  Todo lo que quieras ver, sin límites ni comerciales, a un
                  costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y
                  todas las semanas se agregan más películas y series!
                </QuestionDescription>
              </>
            }
          />
          <Question
            title="¿Cuánto cuesta Netflix?"
            description={
              <>
                <QuestionDescription>
                  Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o
                  dispositivo de streaming, todo por una tarifa plana mensual.
                  Planes desde $6.540 hasta $11.790 al mes. Sin costos
                  adicionales ni contratos.
                </QuestionDescription>
              </>
            }
          />
          <Question
            title="¿Dónde puedo ver Netflix?"
            description={
              <>
                <QuestionDescription>
                  Disfruta donde quieras, cuando quieras. Inicia sesión en tu
                  cuenta de Netflix para ver contenido al instante a través de
                  netflix.com desde tu computadora personal o en cualquier
                  dispositivo con conexión a internet que cuente con la app de
                  Netflix, como smart TV, smartphones, tablets, reproductores
                  multimedia y consolas de juegos.
                </QuestionDescription>
                <QuestionDescription className="mt-5">
                  Además, puedes descargar tus series favoritas con la app para
                  iOS o Android. Con la función de descarga, puedes ver
                  contenido donde vayas y sin conexión a internet. Lleva Netflix
                  contigo adonde sea.
                </QuestionDescription>
              </>
            }
          />
          <Question
            title="¿Cómo cancelo?"
            description={
              <>
                <QuestionDescription>
                  Netflix es flexible. Sin contratos molestos ni compromisos.
                  Cancela la membresía online con solo dos clics. No hay cargos
                  por cancelación. Empieza y termina cuando quieras.
                </QuestionDescription>
              </>
            }
          />
          <Question
            title="¿Qué puedo ver en Netflix?"
            description={
              <>
                <QuestionDescription>
                  Netflix tiene un amplio catálogo de películas, series,
                  documentales, animes, originales premiados y más. Todo lo que
                  quieras ver, cuando quieras.
                </QuestionDescription>
              </>
            }
          />
          <Question
            title="¿Es bueno Netflix para los niños?"
            description={
              <>
                <QuestionDescription>
                  La experiencia de Netflix para niños está incluida en la
                  membresía para que los padres tengan el control mientras los
                  peques disfrutan series y películas familiares en su propio
                  espacio.
                </QuestionDescription>
                <QuestionDescription className="mt-5">
                  Los perfiles para niños incluyen controles parentales
                  protegidos por PIN que te permiten restringir el contenido que
                  pueden ver los niños en función de la clasificación por edad y
                  bloquear determinados títulos que no quieras que los niños
                  vean.
                </QuestionDescription>
              </>
            }
          />
        </div>
      </section>
    </section>
  );
}
