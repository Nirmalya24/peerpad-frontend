import Emoji from "./components/Emoji";
import Navbar from "./components/NavBar";

function LandingPage() {
  return (
    <div className="">
      <div className="h-screen flex items-center px-6 lg:px-32 bg-purple-900 text-white">
        <div className="bg-no-repeat bg-[url('./nodes-sphere-background.png')] h-screen absolute opacity-5"></div>
        <header className="w-full absolute left-0 top-0 p-6 lg:p-32">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">{"{Logo}"}</h1>
            </div>
            <Navbar />
          </div>
        </header>
        <section className="w-full md:w-9/12 xl:w-8/12">
          <h1 className="text-3xl lg:text-5xl font-bold text-pink-500">
            {"<Peer"}
            <br />
            {"Pad/>"}
          </h1>
          <p>Free and Open-Source</p>
          {/* <p className="font-bold mb-1">Free and Open-Source</p> */}
          <p className="font-bold uppercase tracking-widest">
            Mock Interview Platform
          </p>
        </section>
        <footer className="absolute right-0 bottom-0 p-6 lg:p-32">
          <p className="font-bold mb-1">
            Made with <Emoji symbol="❤️" label="love" />
          </p>
          <p>by Nirmalya Ghosh & Jack Holbrook</p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
