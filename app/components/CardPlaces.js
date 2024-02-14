"use client";

import CardDestinations from "./CardDestinations";

export default function CardPlaces() {
  return (
    <main className="w-full px-8 py-8 container">
      <div className="flex flex-row justify-between items-center gap-3">
        <h1 className="text-5xl font-bold">
          Dive Into The Beauty <br /> Of The World
        </h1>
        <div className="flex flex-row gap-6">
          <button className="rounded-full w-10 h-10 hover:bg-sky-500 hover:text-white text-black bg-white text-xl transition duration-300 ease-in-out flex items-center justify-center">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button className="rounded-full w-10 h-10 hover:bg-sky-500 hover:text-white text-black bg-white text-xl transition duration-300 ease-in-out flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-5">
        <CardDestinations
          imgUrl={"https://cdn1.matadornetwork.com/blogs/1/2022/07/nusa-penida-bali-islands-1200x900.jpg"}
          locationName={"Bali Island"}
          state={"Bali"}
          country={"Indonesia"}
          price={224}
        />
        <CardDestinations
          imgUrl={"https://dsvsbigncb06y.cloudfront.net/site/diving/indonesia/indonesiagiliislandsxladobestock286429634.jpg"}
          locationName={"Gili Trawangan"}
          state={"Lombok"}
          country={"NTT"}
          price={224}
        />
        <CardDestinations
          imgUrl={"https://mejorepocapara.net/wp-content/uploads/2019/01/mejor-epoca-para-viajar-a-gran-canon-del-colorado.jpg"}
          locationName={"Grand Canyon"}
          state={"Arizona"}
          country={"United State"}
          price={386}
        />
      </div>
    </main>
  );
}
