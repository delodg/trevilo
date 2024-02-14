export default function CardDestinations({ imgUrl, locationName, state, country, price }) {
  return (
    <main>
      <div className="w-full flex flex-row justify-start items-center gap-5 my-8">
        <div style={{ "--image-url": `url(${imgUrl})` }} className="aspect-video h-72 bg-center bg-[image:var(--image-url)] bg-cover rounded-2xl flex flex-row justify-start items-end p-2">
          <div className="flex flex-row justify-between items-center backdrop-blur-xl px-4 py-2 bg-black/20 border border-white/30 text-white rounded-2xl w-full gap-5">
            <div className="flex flex-col justify-start items-start text-lg">
              <div>{locationName}</div>
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <div>
                  <i className="ri-map-pin-2-fill text-sm"></i>
                </div>
                <span>{state}, {country}</span>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start text-2xl font-medium">
              <div>${price}</div>
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <div>
                  <i className="ri-user-smile-line text-sm"></i>
                </div>
                <span>/person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
