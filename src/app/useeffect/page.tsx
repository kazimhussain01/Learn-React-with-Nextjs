'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const App = () => {

   const [count, setCount] = useState(0)
   const [counter, setCounter] = useState(0)

   const plus = () => {
    setCount(count + 1)
   }

   const minus = () => {
    setCounter (counter - 1)
   }
  
   useEffect(() => {
    alert("Kazim Hussain")
   }, [counter])

   return(
    <div className="flex justify-evenly py-8">
        <button onClick={plus} className="rounded-md text-white px-2 py-1 text-2xl bg-orange-500">Increment {count}</button>
        <button onClick={minus} className="rounded-md text-white px-2 py-1 gap-5 text-2xl bg-yellow-400">Decrement {counter}</button>
    </div>
   )
}

export default App;