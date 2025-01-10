import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header
      style={{ height: 80 }}
      className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md shadow-none"
    >
      <div className="mx-auto sm:flex w-full max-w-5xl items-center justify-between px-4 xs:column">
        <div className="flex justify-center items-center gap-1">
          <h1>
            <Logo />
          </h1>
        </div>
        <nav
          style={{ opacity: 1 }}
          className="flex items-center gap-4 text-sm font-medium"
        >
          <Navigation />
        </nav>
      </div>
    </header>
  );
};
