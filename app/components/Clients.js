import logoLayer from "/public/layers.svg";
import logoSisyphus from "/public/sisyphus.svg";
import logoCircooles from "/public/circooles.svg";
import logoCatalog from "/public/catalog.svg";
import logoQuotient from "/public/quotient.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container p-8 gap-5 flex flex-col">
      <div className="flex flex-col item-center align-middle text-center ">
        <h5 className="text-lg text-slate-300">Join 4,000+ companies already growing</h5>
      </div>
      <div className="flex flex-row justify-between items-center text-slate-800">
        <div className="flex items-center gap-3">
          <Image src={logoLayer} className="h8 w-8" />
          <span className=" text-2xl font-medium">Layer</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src={logoSisyphus} className="h8 w-8" />
          <span className=" text-2xl font-medium">Sisyphus</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src={logoCircooles} className="h8 w-8" />
          <span className=" text-2xl font-medium">Circooles</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src={logoCatalog} className="h8 w-8" />
          <span className=" text-2xl font-medium">Catalog</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src={logoQuotient} className="h8 w-8" />
          <span className=" text-2xl font-medium">Quotient</span>
        </div>
      </div>
    </main>
  );
}
