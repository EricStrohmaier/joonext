'use client'
import { getCurrentTimeIn24HourFormat } from "../utils/helperFunctions";
import { createContext, useState, ReactNode, useEffect } from "react";

type TimeContextType = {
    currentTime: string;
  };

export const TimeContext = createContext<TimeContextType>(
    {
        currentTime: "",
    }
);

  
   const TimeProvider: React.FC<{ children :ReactNode }> = ({ children }) => {
    const [currentTime, setCurrentTime] = useState<string>("");
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const formattedTime = getCurrentTimeIn24HourFormat();
        setCurrentTime(formattedTime);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <TimeContext.Provider value={{ currentTime }}>
        {children}
      </TimeContext.Provider>
    );
  };

    export default TimeProvider;