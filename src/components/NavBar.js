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
        </li>
        <li className="ml-24">
          <a href="/">
            <div className="flex items-center justify-end">
              <div className="w-10 border-b border-solid border-white"></div>
              <h1 className="ml-3 text-3xl font-bold">2</h1>
            </div>
            <div className="text-right">Components</div>
          </a>
        </li>
        <li className="ml-24">
          <a href="/">
            <div className="flex items-center justify-end">
              <div className="w-10 border-b border-solid border-white"></div>
              <h1 className="ml-3 text-3xl font-bold">3</h1>
            </div>
            <div className="text-right">CSS Modules</div>
          </a>
        </li> */}

        <li className="ml-24">
          <a href="/">
            <button
              type="button"
              class="m-2 px-8 py-2 bg-pink-600 text-white rounded-lg  shadow-sm hover:bg-pink-500 focus:ring-2 focus:ring-pink-200"
            >
              Create Session
            </button>
          </a>
        </li>

        <li className="ml-24">
          <a href="nohref">
            <button
              type="button"
              class="m-2 px-8 py-2 bg-pink-600 text-white rounded-lg  shadow-sm hover:bg-pink-500 focus:ring-2 focus:ring-pink-200"
            >
              Join Session
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
