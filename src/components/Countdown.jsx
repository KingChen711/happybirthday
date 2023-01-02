import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import background from '../assets/bg.jpg'
import { TimeContext } from "../contexts/TimeProvider"
import { LOCAL_STORAGE_TOKEN_NAME } from '../contexts/constant';

function TimeBox(props) {

  return (
    <li className="flex flex-col justify-center items-center">
      <div className="p-3 border-neutral-300 border mx-4 rounded-md font-bold">{props.time}</div>
      <div className="text-lg">{props.label}</div>
    </li>
  );
}

export default function Countdown() {

  const { time } = useContext(TimeContext);
  const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
    if (token)
      navigate("/")
  }, [time, navigate])


  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen text-white text-5xl" style={{
      backgroundImage: `url("${background}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div>🥳🎆</div>
      <div className="font-bold my-8">✨ Đếm ngược tới Tết! ✨</div>
      <div className="font-bold">Điều kỳ diệu sẽ xảy ra trong</div>
      <ul className="flex justify-center items-center mt-8">
        <TimeBox label="Days" time={time.days} />
        <TimeBox label="Hours" time={time.hours} />
        <TimeBox label="Minutes" time={time.minutes} />
        <TimeBox label="Seconds" time={time.seconds} />
      </ul>
    </div>
  )
}

