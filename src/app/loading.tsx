import { Skeleton } from "@/components/ui/Skeleton";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <>
      <Skeleton className="w-full aspect-[2.5/1] sm:aspect-[3/1] relative" />
      <div className="flex w-full justify-between flex-wrap gap-4 px-4 py-4 md:py-8">
        <div className="flex gap-4 flex-wrap items-center">
          {[1, 2, 3, 4].map((_, idx: number) => (
            <Skeleton key={idx} className="h-8 w-20 rounded-[100vw]" />
          ))}
        </div>

        <Skeleton className="shrink-0 h-8 w-20 rounded-[100vw]" />
      </div>
    </>
  );
};

export default loading;
