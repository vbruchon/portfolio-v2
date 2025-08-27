import { FC, ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  title: string;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className = "",
  id,
  title,
}) => {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto px-6 py-16 my-12 ${className}`}
    >
      <h2
        className=" text-2xl sm:text-3xl md:text-4xl font-bold  text-center mb-12 
          leading-snug sm:leading-snug md:leading-tight
          text-transparent bg-clip-text bg-gradient-to-r from-ring to-primary
          break-words
        "
      >
        {title}
      </h2>

      {children}
    </section>
  );
};
