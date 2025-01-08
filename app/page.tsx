import { ModeToggle } from "@/components/ModeToggle";
import { Navigation } from "@/components/Navigation";
import TextDescription from "@/components/TextDescription";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-32">
        <div className="fixed z-50">
          <Navigation />
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
            <AvatarImage src="https://media.licdn.com/dms/image/v2/C4D03AQHy5iE3VO-6ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1605118432887?e=1733356800&v=beta&t=kE3rDKnBAsrblZ6pB2IfyisUcyPtnbYHekXg4cPPWzQ" />
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
