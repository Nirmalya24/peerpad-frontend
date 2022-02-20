import SessionModal from "./SessionModal";

function Navbar() {
  return (
    <div>
      <ul className="flex">
        {/* <li className="ml-24">
          <a href="/">
            <div className="flex items-center justify-end">
              <div className="w-10 border-b border-solid border-white"></div>
              <h1 className="ml-3 text-3xl font-bold">1</h1>
            </div>
            <div className="text-right">TailWind CSS</div>
          </a>
        </li> */}

        <li className="ml-24">
          <SessionModal name="Create Session" />
        </li>

        <li className="ml-24">
          <SessionModal name="Join Session" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
