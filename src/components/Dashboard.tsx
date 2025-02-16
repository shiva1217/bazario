"use client";

import { FC, useEffect } from "react";
import Filters, { FiltersProps } from "./Filters";
import { useListProductsQuery } from "@/redux/api/shopAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, setActiveCategory } from "@/redux/features/shopSlice";
import ProductCard from "./ui/ProductCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Shop } from "@/types";

interface DashboardProps extends FiltersProps {}

const Dashboard: FC<DashboardProps> = ({ data }) => {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const dispatch = useDispatch();
  const { products, activeCategory } = useSelector(selectShop);
  const { isLoading, refetch } = useListProductsQuery();
  useEffect(() => {
    let categoryQuery = activeCategory ? "category=" + activeCategory : "";

    let query: string = "";

    if (categoryQuery) query = categoryQuery;

    router.replace(`${path}?${query}`);
    refetch();
    // eslint-disable-next-line
  }, [activeCategory]);

  useEffect(() => {
    let categoryQuery = params.get("category");
    if (categoryQuery) dispatch(setActiveCategory(categoryQuery));
    // eslint-disable-next-line
  }, []);

  const filteredProducts = activeCategory
    ? products?.filter(
        (product: Shop.ProductType) => product.category === activeCategory
      )
    : products;

  return (
    <>
      <Filters data={data} />
      <div className="container flex flex-wrap gap-4 sm:gap-8 justify-center">
        {isLoading ? (
          <Loader2 className=" h-4 w-4 animate-spin" />
        ) : (
          <>
            {filteredProducts?.map((item: any, idx: number) => (
              <div key={idx}>
                <ProductCard {...item} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
