"use client";
import Image from "next/image";
import React from "react";

interface GymComponentProps {
  name: string;
  title: string;
  description: string;
  scheduleWeekDays: string;
  scheduleWeekEnds: string;
  imageUrl: string;
  reverse?: boolean;
}

function GymComponent({
  name,
  title,
  description,
  scheduleWeekDays,
  scheduleWeekEnds,
  imageUrl,
  reverse = false,
}: GymComponentProps) {
  return (
    <div
      className={`w-full flex h-[600px] mb-40 ${reverse ? "flex-row-reverse" : ""
        }`}
    >
      <div className="w-1/2 h-full">
        <Image
          className="w-full h-full object-cover"
          src={imageUrl}
          alt="Trainers"
        />
      </div>
      <div
        className="w-1/2 bg-[#2F2D2D] text-white flex flex-col h-full"
        style={{ fontFamily: "Pridi-Light, sans-serif" }}
      >
        <div className="mt-10 ml-10 mr-20">
          <p className="text-5xl font-bold">{name}</p>
          <p className="mt-3 text-2xl">{title}</p>
          <p
            className="mt-4 text-xl leading-7"
            style={{ letterSpacing: "0.05em" }}
          >
            {description}
          </p>

          <p className="mt-16 text-xl">Instructor Schedule: </p>
          <p className="mt-3 text-xl">{scheduleWeekDays}</p>
          <p className="text-xl">{scheduleWeekEnds}</p>
        </div>
      </div>
    </div>
  );
}

export default GymComponent;
