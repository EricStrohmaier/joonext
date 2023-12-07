'use client'
import React, { useContext, useState, useTransition } from "react";
import { ThemeContext } from "../providers/theme";
import { getInstaLogin } from "../actions/actions";
import Notification from "./Notification";
import { NotifyContext } from "../providers/notify-provider";

export default function UserInstaForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [isPending, startTransition] = useTransition();
  const { setNotifyMessage } = useContext(NotifyContext);
// just save login to state and then pass it later
  const { darkMode } = useContext(ThemeContext);

  const textstyle = darkMode
    ? "bg-backgroundDark text-textDark"
    : "bg-backgroundLight text-textLight";

  const button = darkMode
    ? "bg-secondaryLight text-textLight border-gray-300"
    : "bg-secondaryDark text-textDark";

  const handleLogin = () => {
    console.log("entered handleLogin");
    // startTransition( async () => {
    //     const result = await getInstaLogin(username, password);
    
    //     if (result.success) {
    //       // Handle successful login
    //       console.log("Login successful", result.data.username);
    //         setNotifyMessage("Login successful");
    //     } else {
    //       // Handle login error
    //       console.error("Login error", result.data);
    //         setNotifyMessage("Login error");
    //     }
    //   });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col p-3 border-[1px] rounded-xl w-[70%] space-y-2">
        <label>Instagram Account Details</label>
        <input
          placeholder="Username"
          className={`w-full h-full p-2 mb-2 rounded-xl focus:outline-none ${textstyle}`}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          className={`w-full h-full p-2 mb-2 rounded-xl focus:outline-none ${textstyle}`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isPending ? (
          <div>Login in..</div>
        ) : (
          <button
            onClick={handleLogin}
            className={`border rounded-[70px] p-1 px-2 mr-2 shadow-sm text-sm ml-auto ${button}`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}