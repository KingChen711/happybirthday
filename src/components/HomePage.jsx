import React, { useState } from 'react'
import avatar from "../assets/avatar.jpg"

export default function HomePage() {
  const [isDisplay, setIsDisplay] = useState(false);
  function handleDisplay() {
    setIsDisplay(true);
  }
  function handleHidden() {
    setIsDisplay(false)
  }
  return (
    <div className="relative">
      <div className="text-center w-screen h-screen relative overflow-hidden">
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div className="flex flex-col w-full h-full">
          <div>
            <div className="balloon">H</div>
            <div className="balloon">A</div>
            <div className="balloon">P</div>
            <div className="balloon">P</div>
            <div className="balloon">Y</div>
            <div></div>
            <div className="balloon">N</div>
            <div className="balloon">E</div>
            <div className="balloon">W</div>
            <div className="balloon">Y</div>
            <div className="balloon">E</div>
            <div className="balloon">A</div>
            <div className="balloon">R</div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div onClick={handleDisplay} className="cursor-pointer bg-black h-72 w-72 rounded-full mx-auto z-20 border-8 border-red-500 hover:opacity-80"
              style={{
                backgroundImage: `url("${avatar}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition:"center"
              }}></div>
            <div className="name note text-5xl mt-4">Show Bitch</div>
          </div>
        </div >
      </div>
      <div className={`bg-note note text-black absolute top-28 max-w-lg rounded-md p-8 z-40 left-1/2 -translate-x-1/2 ${isDisplay ? "block" : "hidden"}`}>
        <div className="text-center font-bold text-3xl my-4">Lời chúc</div>
        <div className="text-start text-lg decoration-">
          Chúc mừng năm mới!
        </div>
        <div className="select-none cursor-pointer mt-4 ml-auto px-4 py-2 bg-blue-500 rounded-md w-fit text-red-600 hover:opacity-50" onClick={handleHidden}>❤</div>
      </div>
    </div>
  )
}
