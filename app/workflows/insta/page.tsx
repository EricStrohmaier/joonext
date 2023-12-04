"use client";
import InstaPost from "@/app/components/InstaPost";
import FocusCard from "@/app/components/FocusCard";
import React from "react";

export default function Insta() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full ">
        <div className="flex flex-col items-center justify-center w-[80%] leading-9   h-fit text-xl font-semibold text-center">
          <FocusCard>
            Save time on social media posting! <br/> Our tool lets you create
            cross-platform posts without distractions. <br/> No need to navigate each
            platform individually—focus on what matters. 🚀
          </FocusCard>
        </div>
      </div>
      <div className="flex mt-6 mx-auto items-center justify-center w-[80%] h-full  ">
        <FocusCard>
          <div className="flex items-center justify-center w-full h-fit">
            Login:
          </div>
        </FocusCard>
      </div>
    </div>
  );
}
