interface QuestionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}
export function QuestionDescription({
  children,
  className,
}: QuestionDescriptionProps) {
  return <p className={`text-2xl font-bold ${className}`}>{children}</p>;
}
