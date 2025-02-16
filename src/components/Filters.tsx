"use client";

import { FC,useState } from "react";
import SortByMenu from "./SortByMenu";
import FilterCheckbox from "./FilterCheckbox";
import { useSelector } from "react-redux";
import { selectShop } from "@/redux/features/shopSlice";

export interface FiltersProps {
  data: null | string[];
}

const Filters: FC<FiltersProps> = ({ ...props }) => {
  const { activeCategory } = useSelector(selectShop);
  return (
    <div className="flex w-full justify-between flex-wrap gap-4 px-4 py-4 md:py-8">
      <div className="flex gap-4 flex-wrap items-center">
        {props?.data?.map((item: string, idx: number) => (
          <div key={idx}>
            <FilterCheckbox label={item} isActive={activeCategory === item} />
          </div>
        ))}
      </div>

      <div className="shrink-0">
        <SortByMenu />
      </div>
    </div>
  );
};

export default Filters;
