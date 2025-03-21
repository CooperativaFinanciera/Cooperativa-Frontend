import Image from "next/image";
import { cn } from "@/lib/utils";
export const Brand = ({
  className,
}:{
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Image alt="brand" src="/Cooperativa.svg" width={90} height={90} />
      <h1 className={cn("hidden md:block text-4xl font-bold text-default-200 dark:text-white",className)}>
        Cooperativa Financiera
      </h1>
    </div>
  );
};
