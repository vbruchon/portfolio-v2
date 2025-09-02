"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useState } from "react";
import { Testimonial } from "../testimonials-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = ({ data }: { data: Testimonial[] }) => {
  const autoplay = useMemo(() => Autoplay({ delay: 5000 }), []);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} plugins={[autoplay]} setApi={setApi}>
      <div
        onMouseEnter={() => autoplay.stop()}
        onMouseLeave={() => autoplay.play()}
      >
        <CarouselContent>
          {data.map((testimonial, index) => {
            const isActive = index === selectedIndex;

            return (
              <CarouselItem key={index} className="basis-full lg:basis-1/2">
                <div className="p-4 h-full">
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={isActive}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
