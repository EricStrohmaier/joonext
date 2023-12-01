"use client";
import { useContext } from "react";
// import { X } from "@/app/icons";
import { NotifyContext } from "../providers/notify-provider";

const Notification = () => {
  const { notifyMessage, setNotifyMessage } = useContext(NotifyContext);
  if (!notifyMessage) return null;

  return (
    <div className="flex items-center gap-4 justify-between p-6 bg-black fixed z-50 top-4 left-1/2 -translate-x-1/2 text-white w-full max-w-[45rem] rounded-md">
      <span>{notifyMessage}</span>
      <button onClick={() => setNotifyMessage("")}>
        <div className="h-5 w-5">X</div>
        {/* <X size={20} /> */}
      </button>
    </div>
  );
};

export default Notification;