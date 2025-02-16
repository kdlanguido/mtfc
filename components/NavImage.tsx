import Image from "next/image";
import React from "react";

export default function NavImage() {
  return (
    <Image
      onMouseEnter={() => {}}
      className="!h-auto !w-80"
      src="/assets/gym1.jpg"
      alt=""
      height={"768"}
      width={"1024"}
    />
  );
}
