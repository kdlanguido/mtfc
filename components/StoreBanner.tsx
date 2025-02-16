import Image from "next/image";
import React from "react";

export default function StoreBanner() {
  return (
    <Image
      className="w-screen object-cover !h-[400px] "
      alt=""
      src={"/assets/hero.png"}
      height={"1024"}
      width={"1920"}
    />
  );
}
