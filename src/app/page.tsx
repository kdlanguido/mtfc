"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-8 pt-0 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            src="https://res.cloudinary.com/dlobngrjy/image/upload/v1739477784/DELTA_XI_UPSILON_yyk5yd.webp"
            alt="DXU logo"
            width={1024}
            height={768}
            priority
            layout="intrinsic"
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">A Grand Fraternity for All Armwrestlers </li>
            <li>No Hazing! Pure Arwmrestling</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more about us
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
