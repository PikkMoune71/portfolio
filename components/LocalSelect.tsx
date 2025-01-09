"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@radix-ui/react-icons"; // Ajouter une icône si souhaitée

export const LocalSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DropdownMenuItem className=" flex items-center space-x-2">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
          <span>{locale === "fr" ? "Français" : "English"}</span>
        </DropdownMenuItem>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("fr")}>
          {t("french")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          {t("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
