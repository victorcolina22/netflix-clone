import { CardInformation } from "../CardInformation";
import { DownloadIcon } from "../icons/DownloadIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { TVIcon } from "../icons/TVIcon";
import { VisorIcon } from "../icons/VisorIcon";

export function MoreReasonsToJoin() {
  return (
    <>
      <h3 className="text-2xl font-bold">Más razones para unirte</h3>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-x-4 gap-4 mt-5">
        <CardInformation
          title="Disfruta en tu TV"
          subtitle="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
          icon={<TVIcon />}
        />
        <CardInformation
          title="Descarga tus series para verlas offline"
          subtitle="Guarda tu contenido favorito y siempre tendrás algo para ver."
          icon={<DownloadIcon />}
        />
        <CardInformation
          title="Disfruta donde quieras"
          subtitle="Películas y series ilimitadas en tu teléfono, tablet, laptop y TV."
          icon={<VisorIcon />}
        />
        <CardInformation
          title="Crea perfiles para niños"
          subtitle="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, gratis con tu membresía."
          icon={<ProfileIcon />}
        />
      </div>
    </>
  );
}
