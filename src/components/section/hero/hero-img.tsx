import Image from "next/image";
import { FC } from "react";

export const HeroImage: FC<{
  src: string;
  alt: string;
  children?: React.ReactNode;
}> = ({ src, alt, children }) => (
  <div className="relative w-80 aspect-square md:w-96 lg:w-[400px] xl:w-[450px] 2xl:w-[500px] flex justify-center items-start mr-8 md:mr-0">
    <div className="absolute inset-0 rounded-full overflow-hidden z-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover -translate-x-[10%]"
        priority
      />
    </div>
    {children}
  </div>
);
