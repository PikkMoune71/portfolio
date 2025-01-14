import Image from "next/image";
import { Card } from "./ui/card";
import clsx from "clsx";
import { useCurrentLocale } from "@/locales/client";
import Link from "next/link";
import localFont from "next/font/local";

interface ThumbnailProjectProps {
  title?: string;
  descriptionFr?: string;
  descriptionEn?: string;
  image?: string;
  link?: string;
  rotate?: string;
}

const openSauceBlack = localFont({
  src: "../app/[locale]/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

export const ThumbnailProject: React.FC<ThumbnailProjectProps> = (props) => {
  const currentLanguage = useCurrentLocale();

  return (
    <>
      <Card
        className={clsx(
          "max-w-xs rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:rotate-0 hover:scale-105 m-4 bg-neutral-900 hover:bg-white text-white hover:text-black border-4",
          props.rotate && `${props.rotate}`
        )}
      >
        <Link href={props.link || "/"}>
          <div className="relative">
            <Image
              src={props.image || "/default-image.png"}
              width={400}
              height={400}
              alt={props.title || "Project"}
              style={{ aspectRatio: "2" }}
            />
          </div>
          <div className="p-4">
            <h3 className={`${openSauceBlack.className} text-xl font-bold`}>
              {props.title}
            </h3>
            <p className="text-sm text-gray-400">
              {currentLanguage === "en"
                ? props.descriptionEn
                : props.descriptionFr}
            </p>
          </div>
        </Link>
      </Card>
    </>
  );
};
