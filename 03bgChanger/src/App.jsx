import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  // const changeColor = () => {
  //   setColor("red")
  // }

  return (
    <section
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white px-4 py-3 fixed flex flex-wrap bottom-12 rounded-full shadow-xl gap-3 text-2xl">
        <button
          className="bg-red-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-orange-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="bg-violet-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("violet")}
        >
          Violet
        </button>
        <button
          className="bg-pink-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </section>
  );
}

export default App

