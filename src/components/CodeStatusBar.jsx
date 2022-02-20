import Emoji from "./Emoji";
export default function CodeStatusBar() {
  const currentSessionId = "UDKI";
  const currentTime = 0;
  return (
    <div>
      <ul className="flex">
        <li className="ml-24">
          <div className="flex items-center justify-end">
            <div className="ml-3 font-bold sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
              <Emoji symbol="⏳" label="hourglass" />: {currentTime}
            </div>
          </div>
        </li>
        <li className="ml-24">
          <div className="flex items-center justify-end">
            <div className="ml-3 font-bold text-sm md:text-lg lg:text-xl xl:text-2xl">
              Session ID: {currentSessionId}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
