import CodeStatusBar from "./components/CodeStatusBar";
import CodeTextArea from "./components/CodeTextArea";

export default function CodingPage() {
  return (
    <div className="h-screen bg-purple-900">
      <div></div>
      <header className="w-full relative p-6 text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-pink-500">{"<PeerPad/>"}</h1>
          <CodeStatusBar />
        </div>
      </header>
      <section className="w-full relative p-2 h-5/6">
        <div className="flex flex-row h-full">
          <div className="bg-red-500 flex-1 mx-1 h-full">
            <CodeTextArea language="plaintext" value="Interviewer Space" />
          </div>
          <div className="bg-blue-500 flex-1 mx-1 h-full">
            <CodeTextArea language="cpp" value="//Write your code in C++" />
          </div>
        </div>
        {/* <div className="bg-red-100 w-1/2 h-2 inline-block">
          <textarea name="" id="" className="w-full"></textarea>
        </div>
        <div className="bg-blue-100 w-1/2 h-2 inline-block">
          <textarea name="" id="" className="w-full "></textarea>
        </div> */}
      </section>
    </div>
  );
}
