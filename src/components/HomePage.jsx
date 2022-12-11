import React, { useState } from 'react'
import avatar from "../assets/avatar.png"

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
            <div className="balloon">B</div>
            <div className="balloon">I</div>
            <div className="balloon">R</div>
            <div className="balloon">T</div>
            <div className="balloon">H</div>
            <div className="balloon">D</div>
            <div className="balloon">A</div>
            <div className="balloon">Y</div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div onClick={handleDisplay} className="cursor-pointer bg-black h-72 w-72 rounded-full mx-auto z-20 border-8 border-red-500 hover:opacity-80"
              style={{
                backgroundImage: `url("${avatar}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}></div>
            <div className="name note text-5xl mt-4">Đào Kim Khánh</div>
          </div>
        </div >
      </div>
      <div className={`bg-note note text-black absolute top-28 max-w-lg rounded-md p-8 z-40 left-1/2 -translate-x-1/2 ${isDisplay ? "block" : "hidden"}`}>
        <div className="text-center font-bold text-3xl my-4">Lời chúc</div>
        <div className="text-start text-lg decoration-">
        Chúc em bước sang tuổi 19 này sẽ luôn đón nhận  những điều hạnh phúc và mong sự buồn phiền sẽ không đến với em. Hãy trở thành một cô bé mạnh mẽ và mang những năng lượng tích cực em nhé! Chúc em trên môi luôn có nụ cười vì lúc em cười là lúc em xinh nhất đấy 😙.Đối với tui, em là 1 cô gái trên cả tuyệt vời, hy vọng rằng em sẽ nhận ra được điều đó. Tui sẽ luôn bên cạnh, ủng hộ và bảo vệ em dù là với tư cách gì. Mặc dù sinh nhật năm nay tui không ở bên chúc mừng nhưng những năm tiếp theo sẽ có tui bên cạnh chúc mừng em. Chúc mừng sinh nhật em nhé! Tất cả những điều tốt lành sẽ đến với em 💕 Luôn nghĩ về em. 🎂
        </div>
        <div className="select-none cursor-pointer mt-4 ml-auto px-4 py-2 bg-blue-500 rounded-md w-fit text-red-600 hover:opacity-50" onClick={handleHidden}>❤</div>
      </div>
    </div>
  )
}
