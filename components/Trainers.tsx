import Image from "next/image";
import React from "react";
function Trainers() {
  return (
    <div className="relative w-full h-[600px] top-0">
      <div className="relative w-full h-[600px] -z-10">
        <Image
          className="m-0 p-0"
          src="/assets/trainerbackground1.png"
          alt="Trainers"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center">
          <p className="text-4xl font-bold">Choose your Personal Trainer</p>
          <p className="text-4xl font-bold">in</p>
          <p className="text-4xl font-bold italic text-[#1AB8B8]">
            Manila Total Fitness
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
