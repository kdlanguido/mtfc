import Image from "next/image";
import React from "react";

export default function StoreBanner({ src }: { src: string }) {
  return (
    <Image
      className="w-screen mb-20 object-cover !h-auto "
      alt=""
      src={src}
      height={"1024"}
      width={"1920"}
    />
  );
}
