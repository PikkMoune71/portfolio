import React from "react";
import { Logo } from "./Logo";
import { SocialContact } from "./SocialContact";
import { Navigation } from "./Navigation";

export const Footer = () => {
  return (
    <div className="m-auto pt-8 pb-2 px-6 max-w-5xl w-full relative sh">
      <div className="flex flex-col justify-center items-center gap-2">
        <Logo />
        <SocialContact linkedin github instagram cv iconSize="28" />
        <Navigation />
      </div>
    </div>
  );
};
