export default function InputText(props) {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        {/* <label
          for="exampleFormControlInput1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Example label
        </label> */}
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
