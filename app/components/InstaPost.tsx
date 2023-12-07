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

  const button = darkMode
    ? "bg-secondaryLight text-textLight border-gray-300"
    : "bg-secondaryDark text-textDark";

  const handlePost = () => {
    startTransition(() => {
      // postToInsta(image, input);
    });
  };
  return (
    <>
      <label>Instagram Post Details</label>
      <input
        placeholder="https://image....."
        className={`w-full h-full p-2 mb-2 rounded-xl focus:outline-none ${textstyle}`}
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        placeholder="Caption of the day"
        className={`w-full h-full p-2 mb-2 rounded-xl focus:outline-none ${textstyle}`}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {isPending ? (
        <div>Login in..</div>
      ) : (
        <button
          onClick={handlePost}
          className={`border rounded-[70px] p-1 px-2 mr-2 shadow-sm text-sm ml-auto ${button}`}
        >
          Next
        </button>
      )}{" "}
    </>
  );
}
