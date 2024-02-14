import HeroNavBar from "./HeroNavbar";

export default function Hero() {
  return (
    <main>
      <div className="w-full flex flex-row justify-between text-white  items-center my-24">
        <div className="flex flex-col justify-center items-center gap-5 px-8 shadow-sm">
          <h5 className="uppercase bg-white/20 backdrop-blur-3xl text-center py-[.1rem] px-3 rounded-3xl text-[.8rem] border border-white/10 tracking-wider align-middle -mb-4">PONTON TREVILO</h5>
          <h1 className="text-6xl text-center font-semibold max-w-screen-lg leading-tight">Discover The Magic In Every Destination With Us!</h1>
          <p className="text-center -mt-4 text-sm tracking-wide font-light">Enjoy exclusive offers and best prices for satisfying travel packages.</p>
          <div className=" flex flex-row gap-2 bg-white/20 backdrop-blur-3xl text-center py-1 px-1 rounded-3xl border border-white/30 align-middle mt-5 -mb-3">
            <button className="flex flex-row gap-2 text-sky-500 bg-white px-4 py-2 rounded-3xl">
              <i className="ri-hotel-line"></i>
              <div>Hotel</div>
            </button>
            <button className="flex flex-row gap-2 px-4 py-2 rounded-3xl">
              <i className="ri-flight-takeoff-line"></i>
              <div>Flight</div>
            </button>
            <button className="flex flex-row gap-2 px-4 py-2 rounded-3xl">
              <i className="ri-car-line"></i>
              <div>Car</div>
            </button>
            <button className="flex flex-row gap-2 px-4 py-2 rounded-3xl">
              <i className="ri-coupon-2-line"></i>
              <div>Event</div>
            </button>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 bg-white p-6 rounded-3xl font-medium ">
            <div className="border-r border-gray-300 pr-6">
              <HeroNavBar buttonName="Destination" description="City Or Destination" icon="ri-map-pin-line" />
            </div>
            <div className="border-r border-gray-300 pr-6">
              <HeroNavBar buttonName="Check-In" description="Add Date" icon="ri-calendar-2-line" />
            </div>
            <div className="border-r border-gray-300 pr-6">
              <HeroNavBar buttonName="Check-Out" description="Add Date" icon="ri-calendar-2-line" />
            </div>
            <HeroNavBar buttonName="Travelers" description="Add Guests" icon="ri-user-4-line" />
            <button className="flex flex-row justify-center items-center py-3 px-5 bg-sky-500 text-white gap-2 rounded-xl ml-5">
              <i className="ri-search-2-line "></i>
              <div className="text-sm">Search</div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
