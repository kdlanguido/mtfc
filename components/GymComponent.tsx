"use client";
import Image from "next/image";
import { GymInfoI } from "@/constants/interfaces";
import React from "react";

function GymComponent({ GymInfo, reverse }: { GymInfo: GymInfoI, reverse: boolean }) {
  return (
    <div
      className={`w-full flex h-[600px] mb-40 ${reverse ? "flex-row-reverse" : ""
        }`}
    >
      <div className="w-1/2 h-full">
        <Image
          className="w-full h-full object-cover"
          width={1920}
          height={600}
          src={GymInfo?.profileUrl}
          alt="Trainers"
        />
      </div>
      <div
        className="w-1/2 bg-[#2F2D2D] text-white flex flex-col h-full"
        style={{ fontFamily: "Pridi-Light, sans-serif" }}
      >
        <div className="mt-10 ml-10 mr-20">
          <p className="text-5xl font-bold">{GymInfo.fullName}</p>
          <p className="mt-3 text-2xl">{GymInfo.specialization}</p>
          <p
            className="mt-4 text-xl leading-7"
            style={{ letterSpacing: "0.05em" }}
          >
            {GymInfo.shortIntro}
          </p>

          <p className="mt-16 text-xl">Instructor Schedule: </p>
          <p className="mt-3 text-xl">{GymInfo.instructorSchedule.split(",").map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br />
            </React.Fragment>
          ))}</p>
        </div>
      </div>
    </div>
  );
}

export default GymComponent;
