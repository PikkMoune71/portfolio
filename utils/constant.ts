import localFont from "next/font/local";

export const openSauceBlack = localFont({
  src: "../app/[locale]/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

export const animations = {
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};
