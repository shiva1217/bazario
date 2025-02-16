import Dashboard from "@/components/Dashboard";
import { BASE_URL } from "@/config";

export default async function Home() {
  var data: string[] | null = null;
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      cache: "no-cache",
    });
    data = await res.json();
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="w-full h-full  bg-slate-50">
      <Dashboard data={data} />
    </div>
  );
}
