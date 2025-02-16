"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { buttonVariants } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, setActiveCategory } from "@/redux/features/shopSlice";

interface FilterCheckboxProps {
  label?: string;
  isActive?: boolean;
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({ ...props }) => {
  const { activeCategory } = useSelector(selectShop);
  const [isChecked, setIsChecked] = useState(props?.isActive);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      dispatch(setActiveCategory(props?.label));
    } else {
      dispatch(setActiveCategory(""));
    }
  };
  return (
    <label
      className={cn(
        buttonVariants({
          variant: activeCategory !== props?.label ? "outline" : "default",
          size: "xs",
        }),
        "flex text-[10px] items-center md:text-xs capitalize py-1 px-2 md:px-4 md:py-2"
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={(e) => handleCheckboxChange(e)}
      />
      {props?.label}
    </label>
  );
};

export default FilterCheckbox;
