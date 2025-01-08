import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Navigation } from "@/components/Navigation";

import TextDescription from "@/components/TextDescription";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-32">
        <div className="z-50">
          <div className="flex justify-between items-center">
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </motion.div>
        <TextDescription />
      </div>

      <div className="fixed bottom-10 right-10">
        <ModeToggle />
      </div>
    </>
  );
}
