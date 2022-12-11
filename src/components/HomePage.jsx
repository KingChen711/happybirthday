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
        <div className="text-start text-lg decoration-">Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).
        </div>
        <div className="select-none cursor-pointer mt-4 ml-auto px-4 py-2 bg-blue-500 rounded-md w-fit text-red-600 hover:opacity-50" onClick={handleHidden}>❤</div>
      </div>
    </div>
  )
}
