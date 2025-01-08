import { Header } from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";

import TextDescription from "@/components/TextDescription";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-20"></div>
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
