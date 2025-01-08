import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const openSauceBlack = localFont({
  src: "../app/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

export const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <div className="flex">
          <span className={`${openSauceBlack.className} text-3xl font-bold`}>
            antoinepicard
          </span>
          <span className="text-xs font-normal writing-mode-vertical-rl leading-3">
            .com
          </span>
        </div>
      </Link>
    </>
  );
};
