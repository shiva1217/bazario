"use client";

import Link from "next/link";
import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectShop,
} from "@/redux/features/shopSlice";
import ICON from "../../src/app/icon.jpg";
import Image from "next/image";


interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { showCart } = useSelector(selectShop);
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 inset-x-0 h-fit  bg-slate-50 border- borde-zinc-300 z-[10] py-4">
      <nav className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link
          href="https://github.com/shiva1217/bazario"
          className="flex gap-2 items-center"
        ><div className="h-50 w-50 sm:h-6 sm:w-6">
          <Image src={ICON} alt={""} />
          </div>
          <p className="hidden text-zinc-900 text-3xl font-medium md:block font-cinzel">
            Bazario
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
