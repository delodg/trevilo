export default function HeroNavBar({ buttonName, description, icon }) {
  return (
    <main>
      <div>
        <button className="flex flex-row justify-start items-center gap-3 text-left">
          <div className="text-xl  text-black">
            <i className={icon}></i>
          </div>
          <div>
            <div className="text-sm  text-black">{buttonName}</div>
            <div className="text-xs text-gray-400">{description}</div>
          </div>
        </button>
      </div>
    </main>
  );
}
