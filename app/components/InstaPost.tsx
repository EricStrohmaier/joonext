import React, { useTransition } from "react";
import { postToInsta } from "../actions/actions";

export default function InstaPost() {
  const [image, setImage] = React.useState("");
  const [input, setInput] = React.useState("");
  let [isPending, startTransition] = useTransition();

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
          className={`w-full h-full p-2 mb-2 rounded-md focus:outline-none bg-transparent grow `}
        />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`w-full min-h-[120px] h-full p-2 rounded-md bg-transparent  focus:outline-none`}
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
