import styles from "./styles.module.css";

interface CardInformationProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
export function CardInformation({
  title,
  subtitle,
  icon,
}: Partial<CardInformationProps>) {
  return (
    <div
      className={`flex flex-col xl:w-[287px] xl:h-[302px] w-full bg-red-500 rounded-2xl ${styles["background-color"]} py-5 px-4`}
    >
      <p className="text-2xl font-bold">{title}</p>
      <p className="mt-4">{subtitle}</p>
      <div className="flex-1 self-end place-content-end">{icon}</div>
    </div>
  );
}
