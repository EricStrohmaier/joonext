import React, { useContext, useTransition } from "react";
import { postToInsta } from "../actions/actions";
import { ThemeContext } from "../providers/theme";

export default function InstaPost() {
  const [image, setImage] = React.useState("");
  const [input, setInput] = React.useState("");
  let [isPending, startTransition] = useTransition();
  const { darkMode } = useContext(ThemeContext);

  const textstyle = darkMode
  ? "bg-backgroundDark text-textDark"
  : "bg-backgroundLight text-textLight";

  const handlePost = () => {
    startTransition(() => {
      postToInsta(image, input);
    });
  };
  return (
    <div>
      <div className="flex justify-center w-full text-lg font-bold">
        Lets post to Instagram
      </div>
      <div>
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image Url"
          className={`${textstyle} w-full h-full p-2 mb-2 rounded-md focus:outline-none grow `}
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${textstyle} w-full h-full p-2 rounded-md   focus:outline-none`}
          placeholder="What's your story today?"
        />
        {isPending ? (
          <div>Uploading Image...</div>
        ) : (
          <button onClick={handlePost}>Submit</button>
        )}
      </div>
    </div>
  );
}
