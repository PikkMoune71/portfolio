import { cn } from "@/lib/utils";

export default function Maintenance() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-gray-100"
      )}
    >
      <h1 className="text-4xl font-bold text-gray-800">
        Site en cours de construction 🚧
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center">
        Nous travaillons dur pour vous offrir une expérience incroyable. Revenez
        bientôt !
      </p>
    </div>
  );
}
