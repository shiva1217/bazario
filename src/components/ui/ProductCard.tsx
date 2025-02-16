import { Shop } from "@/types";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

interface ProductCardProps extends Shop.ProductType {}

const ProductCard: FC<ProductCardProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative  flex flex-col gap-2 bg-slate-50 rounded-xl overflow-hidden p-4 w-56 ">
      <Link href={`/product/${props.id}`} passHref className="cursor-pointer">
        <div className="bg-white p-2 rounded-xl overflow-hidden flex justify-center relative mb-2">
          <div className="w-36 sm:w-44 aspect-square relative bg-white">
            <Image src={props.image} fill alt={props.title} />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between mt-2">
          <span className="truncate text-sm">{props.title}</span>
          <span className="text-[12px] font-semibold shrink-0">
            $ {props.price}
          </span>
        </div>
        <div className="line-clamp-1 text-[13px] text-zinc-500 mt-2">
          {props.category}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
