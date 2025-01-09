import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-20"></div>
      <About />
      <div className="fixed bottom-10 right-10">
        <ModeToggle />
      </div>
    </>
  );
}
