"use client";

import { FC, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

import { Shop } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

interface Product {
  category: string;
  id: number;
  title: string;
  price: number;
  image: string;
}

const SortByMenu: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<"lowest" | "highest" | null>(null);

  // Fetch products from FakeStoreAPI
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setSortedProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Sorting function
  const handleSortChange = (order: "lowest" | "highest") => {
    setSortOrder(order);
    const sorted = [...products].sort((a, b) =>
      order === "lowest" ? a.price - b.price : b.price - a.price
    );
    setSortedProducts(sorted);
  };
  
  return (
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            buttonVariants({ variant: "default" }),
            "hidden md:flex text-[10px] items-center md:text-xs capitalize py-1 px-2 md:px-4 md:py-2"
          )}
        >
          {sortOrder ? `Sort: ${sortOrder}` : "Sort By"}
        </div>
        <div
          className={cn(
            buttonVariants({ variant: "default", size: "xs" }),
            "md:hidden text-[10px] flex items-center md:text-xs capitalize py-1 px-2 md:px-4 md:py-2"
          )}
        >
          {sortOrder ? `Sort: ${sortOrder}` : "Sort By"}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuItem onClick={() => handleSortChange("lowest")}>
          <p className="w-[200px] truncate text-sm text-zinc-900">Lowest Price</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleSortChange("highest")}>
          <p className="w-[200px] truncate text-sm text-zinc-900">Highest Price</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</div>
  );
};


export default SortByMenu;
