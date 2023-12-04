"use client";
import { FC } from "react";
import FeedNavbar from "../components/FeedNavbar";
import FocusCard from "../components/FocusCard";
import CreateTextNote from "../components/CreateTextNote";
import Link from "next/link";

interface WorkflowProps {}

const Workflow: FC<WorkflowProps> = () => {
  return (
    <>
      <FeedNavbar>
      <div className="items-center text-sm  font-semibold">
          Did you know that you can export your instagram posts to nostr?{" "}
          <Link href="/workflows/insta" className="underline">
            find out how!
          </Link>
        </div>
      </FeedNavbar>

      <div className="w-full h-fit">
        <div className="flex items-center justify-center w-full mb-6 min-h-[33%]">
          <FocusCard>
            <CreateTextNote />
          </FocusCard>
        </div>
        <div className="flex justify-center text-3xl my-3 font-semibold">
          Explore workflows
        </div>
        <div className="w-full h-full cursor-pointer px-3 flex flex-row">
          <Link href="/workflows/insta" className="flex justify-center items-center mr-5 w-[35%] scale-100 hover:scale-105 transition-transform duration-100">
            <FocusCard>
              <div className="flex justify-center items-center h-40 text-xl font-semibold">
              Instagram integration
              </div>
            </FocusCard>{" "}
          </Link>
          <Link href="/workflows/lists/new" className="flex  justify-center items-center mr-5 w-[65%] text-center scale-100 hover:scale-105 transition-transform duration-100">
            <FocusCard>
              {" "}
              <div className="flex items-center justify-center w-full h-40 text-xl font-semibold">
                Create new content list here <br />
                intresting lists for an intresting feed <br />
                sometimes we need only a coulpe of people in the feed{" "}
              </div>
            </FocusCard>{" "}
          </Link>
        </div>
        <div className="flex justify-start w-full h-full  cursor-pointer px-3">
          
        </div>
      </div>
    </>
  );
};

export default Workflow;

// const location = useLocation();
// const currentUrl = location.pathname;
// {currentUrl === "/workflows/create" ? (
//   <CreateTextNote />
// ) : (
//   <div className="flex justify-center w-full text-lg font-bold">
//     Here you will be able to create your own workflows
//   </div>
// )}
