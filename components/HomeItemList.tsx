import { Box, Typography } from "@mui/joy";
import React from "react";

function HomeItemList() {
  const fetchData = [
    {
      image: "/assets/wheyprotein.png",
      name: "Whey Protein",
    },
    {
      image: " /assets/monster.png",
      name: "Energy Drink",
    },
    {
      image: "/assets/redbull.png",
      name: "Creatine",
    },
    {
      image: "/assets/yogamat.png ",
      name: "Yoga Mat",
    },
    {
      image: "/assets/proteinbar.png ",
      name: "Protein Bar",
    },
  ];
  return (
    <Box className="flex flex-row w-full bg-[#808080] items-center justify-center mb-40">
      <Box className=" flex flex-row w-full bg-[#808080] h-[300px] mt-5 justify-evenly">
        {fetchData.map((info, key) => (
          <Box key={key} className="flex flex-col items-center">
            <Box className="space-x-30">
              <img
                src={info.image}
                alt={info.name}
                className="h-[200px] w-[200px] object-contain"
              />
              <Typography className="text-center">{info.name}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HomeItemList;
