'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export function CarouselButtons({ onPrev, onNext }: Props) {
  return (
    <>
      <button
        onClick={onPrev}
        className="
          absolute
          left-0
          top-1/2
          z-30
          hidden
          -translate-x-1/2
          -translate-y-1/2
          lg:flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-white/95
          backdrop-blur
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-black
          hover:text-white
        "
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={onNext}
        className="
          absolute
          right-0
          top-1/2
          z-30
          hidden
          translate-x-1/2
          -translate-y-1/2
          lg:flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-white/95
          backdrop-blur
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-black
          hover:text-white
        "
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </>
  );
}
