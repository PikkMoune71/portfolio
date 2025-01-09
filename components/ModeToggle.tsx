"use client";
import * as React from "react";
import { MoonIcon, SunIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/locales/client";
import { LocalSelect } from "./LocalSelect";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <MixerHorizontalIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {theme === "light" ? (
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="ml-2">{t("darkMode")}</span>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="ml-2">{t("lightMode")}</span>
          </DropdownMenuItem>
        )}

        <LocalSelect />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
