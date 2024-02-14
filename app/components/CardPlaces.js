export default function CardPlaces() {
  return (
    <main className="w-full px-8 py-8 container">
      <div className="flex flex-row justify-between items-center gap-3">
        <h1 className="text-5xl font-bold">
          Dive Into The Beauty <br /> Of The World
        </h1>
        <div className="flex flex-row gap-6">
          <button className=" rounded-full w-10 h-10 hover:bg-sky-500 hover:text-white text-black bg-white text-xl transition duration-300 ease-in-out">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button className="rounded-full w-10 h-10 hover:bg-sky-500 hover:text-white text-black bg-white text-xl transition duration-300 ease-in-out">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </main>
  );
}
