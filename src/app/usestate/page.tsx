'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const App = () => {

   const [count, setCount] = useState(0)

   const plus = () => {
    setCount(count + 1)
   }

   const minus = () => {
    setCount (count - 1)
   }
  
   return(
    <div className="flex justify-evenly py-8">
        <button onClick={plus} className="rounded-full w-10 h-10 text-2xl bg-blue-700">+</button>
            {count}
        <button onClick={minus} className="rounded-full w-10 h-10 gap-5 text-2xl bg-yellow-700">-</button>
    </div>
   )
}

export default App;