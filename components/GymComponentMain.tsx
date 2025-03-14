"use client"

import React, { useEffect, useState } from "react";
import GymComponent from "./GymComponent";
import { TrainerPageImg } from "@/constants/image.storage";

function GymComponentMain({ fetchTrainerFor }: { fetchTrainerFor: string }) {

  const [trainers, setTrainers] = useState([])

  const findByTrainerFor = async () => {
    const response = await fetch(`/api/trainers/findByTrainerFor/${fetchTrainerFor}`)
    setTrainers(await response.json())
  }

  useEffect(() => {
    findByTrainerFor()
  }, [fetchTrainerFor])

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat m-0 p-0 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${TrainerPageImg})` }}
    >
      {
        trainers && trainers.map((gymInfo, key) => (
          <GymComponent GymInfo={gymInfo} key={key} reverse={key % 2 == 0 ? false : true} />
        ))
      }
    </div>
  );
}

export default GymComponentMain;
