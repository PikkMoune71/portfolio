import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-20"></div>
      <About />
      <Skills />
      <div className="fixed bottom-10 right-10">
        <ModeToggle />
      </div>
    </>
  );
}
