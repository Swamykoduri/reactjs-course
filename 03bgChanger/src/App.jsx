import { useState } from 'react'
import './App.css'
import Index from './Index';

function App() {
  const [color, setColor] = useState("#FFEBB2");

  // const changeColor = () => {
  //   setColor("red")
  // }

  return (
    <section
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <Index/>
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
          onClick={() => setColor("#FCCD2A")}
        >
          Yellow
        </button>
        <button
          className="bg-orange-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("#FF6600")}
        >
          Orange
        </button>
        <button
          className="bg-violet-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("#AD49E1")}
        >
          Violet
        </button>
        <button
          className="bg-pink-500 px-4 py-2 rounded-full shadow-slate-400 text-white"
          onClick={() => setColor("#FF76CE")}
        >
          Pink
        </button>
        <button
          className="bg-white px-4 py-2 rounded-full shadow-2xl border-zinc-500 border-spacing-2 text-slate-700"
          onClick={() => setColor("#ffffff")}
        >
          White
        </button>
      </div>
    </section>
  );
}

export default App

