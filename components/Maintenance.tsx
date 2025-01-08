import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export default function Maintenance() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-gray-100"
      )}
    >
      <div className="text-center text-gray-800 mb-4">
        <Logo />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Site en cours de construction 🚧
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center">
        Nous travaillons dur pour vous offrir une expérience incroyable. Revenez
        bientôt !
      </p>
    </div>
  );
}
