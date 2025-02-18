import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-[313px] bg-[#7F7F7F] flex flex-row px-10 items-center ">
      <div className="flex flex-col items-start w-full">
        <Image
          alt="Logo"
          src="/assets/logo.png"
          height={60}
          width={100}
          className="object-cover"
        />
        <div
          className="text-white font-bold text-[15px] mt-16"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>Copyright 2024.</p>
          <p>All rights reserved. ActiveGym.</p>
          <div className="flex flex-row mt-5 space-x-8">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-10 justify-evenly w-full">
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-[15px]">LOCATION</h2>
          <div className="mt-3">
            <p>
              Adamson <br /> University 900 San <br /> Marcelino st., Ermita,{" "}
              <br />
              Manila 1000
            </p>
          </div>
          <div className="mt-3">
            <p> +639 27 xxx xxxx</p>
          </div>
          <div className="mt-3">
            <p>fhilipkr.lorenzo@adamson.edu.ph</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-[15px]">QUICK LINKS</h2>
          <div className="flex flex-col items-center justify-center space-y-3 mt-3">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/about" className="text-white">
              About
            </Link>
            <Link href="/classes" className="text-white">
              Classes
            </Link>
            <Link href="/trainer" className="text-white">
              Trainer
            </Link>
            <Link href="/pricing" className="text-white">
              Pricing
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-16 self-end space-x-2">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Facebook Logo"
            src="/assets/fb.png"
            height={33}
            width={34}
            className="object-cover"
          />
        </Link>
        <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
          <Image
            alt="X Logo"
            src="/assets/x.png"
            height={33}
            width={34}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Instagram Logo"
            src="/assets/ig.png"
            height={33}
            width={34}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
