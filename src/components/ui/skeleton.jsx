import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-black", className)}
      {...props}
    />
  );
}

export { Skeleton };
