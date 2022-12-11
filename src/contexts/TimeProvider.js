import React, { useState } from "react"
import { LOCAL_STORAGE_TOKEN_NAME } from "./constant";

export const TimeContext = React.createContext()

export default function TimeProvider({ children }) {

  const [time, setTime] = useState({});


  function format(x) {
    if (x < 10)
      return `0${x}`;
    return `${x}`;
  }

  React.useEffect(() => {
    const countDownDate = new Date("Dec 11, 2022 21:26:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance < 0) {
        console.log(distance);
        clearInterval(interval);
        sessionStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, "token");
      }
      setTime({
        days: format(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: format(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: format(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: format(Math.floor((distance % (1000 * 60)) / 1000)),
      })
    }, 1000)
  }, [])
  return (
    <TimeContext.Provider value={{ time }}>
      {children}
    </TimeContext.Provider>
  )
}

