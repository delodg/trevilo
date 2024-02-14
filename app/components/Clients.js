export default function Home() {
  return (
    <main className="container p-8 gap-5 flex flex-col">
      <div className="flex flex-col item-center align-middle text-center ">
        <h5 className="text-lg text-slate-300">Join 4,000+ companies already growing</h5>
      </div>
      <div className="flex flex-row justify-between items-center text-slate-500">
        <div className="flex items-center gap-3">
          <i className="ri-meta-line text-5xl"></i>
          <span className=" text-2xl font-medium">Meta</span>
        </div>
        <div className="flex items-center gap-3">
          <i className="ri-patreon-fill text-4xl"></i>
          <span className=" text-2xl font-medium">Patreon</span>
        </div>
        <div className="flex items-center gap-3">
          <i className="ri-whatsapp-line text-4xl"></i>
          <span className=" text-2xl font-medium">Whatsapp</span>
        </div>
        <div className="flex items-center gap-3">
          <i className="ri-steam-fill text-4xl"></i>
          <span className=" text-2xl font-medium">Steam</span>
        </div>
        <div className="flex items-center gap-3">
          <i className="ri-switch-line text-4xl"></i>
          <span className=" text-2xl font-medium">Nintendo</span>
        </div>
      </div>
    </main>
  );
}
