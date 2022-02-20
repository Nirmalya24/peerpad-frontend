export default function Accordion(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingOne">
          <button
            className="accordion-button
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {props.name}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse border-0 collapse show"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            {" "}
            <code>{props.output}</code>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
