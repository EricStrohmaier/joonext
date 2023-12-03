"use client";
import InstaPost from "@/app/components/InstaPost";
import WorkflowCard from "@/app/components/WorkflowCard";
import React from "react";

export default function Insta() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full lg:w-2/5 ">
        <WorkflowCard>
          <div> Login</div>
          <div className="flex items-center justify-center w-full h-fit">
            <InstaPost />
          </div>
        </WorkflowCard>{" "}
      </div>
      <div className="flex my-3 items-center justify-center w-full h-full lg:w-2/5 ">
        <WorkflowCard>
          <div> Post to insta</div>
          <div className="flex items-center justify-center w-full h-fit">
            ho
          </div>
        </WorkflowCard>{" "}
      </div>
    </div>
  );
}
