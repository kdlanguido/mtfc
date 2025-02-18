import React from "react";
import GymComponent from "./GymComponent";
import { TrainerPageImg } from "@/constants/image.storage";

function GymComponentMain() {
  const fetchData = [
    {
      name: "Mark Reyes Cruz",
      title: "Boxing & Gym Instructor",
      description:
        "Mark Reyes Cruz is a skilled boxing and gym instructor with a strong martial arts background. Known for his focus on discipline and technique, he creates personalized workouts to improve strength, agility, and overall health. Mark’s dynamic coaching style appeals to both beginners and experienced athletes.",
      scheduleWeekDays: "Weekdays: 8:00AM - 1:00PM ",
      scheduleWeekEnds: "Weekends: 9:00AM - 12:00PM",
      imageUrl: "/assets/maleboxer.png",
      reverse: false,
    },
    {
      name: "Isabella Mae Navarro",
      title: "Woman Gym Instructor",
      description:
        "Isabella Mae Navarro is a skilled taekwondo and gym instructor. Known for her focus on discipline and technique, she creates personalized workouts to improve strength, agility, and overall health. Isabella’s dynamic coaching style appeals to both beginners and experienced athletes.",
      scheduleWeekDays: "Weekdays: 7:00AM - 12:00PM ",
      scheduleWeekEnds: "Weekends: 9:00AM - 12:00PM",
      imageUrl: "/assets/yogagirl.png",
      reverse: true,
    },
    {
      name: "Jasper Cruz Morales",
      title: "Body Builder Gym Instructor",
      description:
        "Jasper Cruz Morales is an experienced Muay Thai instructor who focuses on discipline, technique, and mental toughness. He creates tailored training programs to enhance strength, agility, and fitness, benefiting both beginners and advanced athletes.",
      scheduleWeekDays: "Weekdays: 6:00AM - 11:00AM",
      scheduleWeekEnds: "Weekends: 9:00AM - 12:00PM",
      imageUrl: "/assets/athleticman.png",
      reverse: false,
    },
  ];
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat m-0 p-0 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${TrainerPageImg})` }}
    >
      {fetchData.map((gymInfo, key) => (
        <GymComponent GymInfo={gymInfo} key={key} />
      ))}
    </div>
  );
}

export default GymComponentMain;
