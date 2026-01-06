"use client";

import {useState} from "react";


export default function Home() {


  const [count, setCount] = useState(0);

  return (
    <main  className="flex items-center h-screen justify-center">


     <div>
       <h2 className="text-5xl text-center pt-20">{count}</h2>
    <div className="flex gap-6 pt-8">
      <button onClick={() => setCount(count + 1)} className="px-4 py-4 bg-green-400 rounded-4xl cursor-pointer">Increment</button>
            <button onClick={() => setCount(0)} className="px-4 py-4 bg-amber-400 rounded-4xl cursor-pointer">Reset</button>

            <button onClick={() => setCount(count - 1)} className="px-4 py-4 bg-red-400 rounded-4xl cursor-pointer">Decrement</button>
    </div>

     </div>

    </main>
  );
}
