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
      <FeedNavbar />

      <div className="w-full h-fit">
      <div className="flex justify-center text-3xl my-3 font-semibold">Explore workflows</div>
        <div className="flex items-center justify-center w-full mb-6 min-h-[33%]">
          <FocusCard>
            <CreateTextNote />
          </FocusCard>
        </div>

        {/* <div className="w-full lg:h-2/3 h-1/3 lg:flex">
          <div className="flex items-center justify-center w-full h-full mb-4 lg:w-3/5">
            <FocusCard>
              <div className="flex items-center justify-center w-full h-40">
                comming soon <br />
                Post&apos;s:
                <br />
                Schleude your posts <br />
                publish drafts etc.
              </div>
            </FocusCard>{" "}
          </div>
          <div className="flex items-center justify-center w-full h-full lg:w-2/5 ">
            <FocusCard>
              {" "}
              <div className="flex items-center justify-center w-full h-40">
                comming soon <br />
                LISTS:
                <br />
                View and edit your lists{" "}
              </div>
            </FocusCard>{" "}
          </div>
        </div> */}
        <div className="flex items-start justify-start w-full h-full  cursor-pointer px-3">
          <Link href="/workflows/insta">
          <FocusCard>
            {" "}
            <div className="flex items-center justify-center w-full h-40">
              Export your instagram posts to nostr here <br />

              Post to both plafforms at once <br />
            </div>
          </FocusCard>{" "}
          </Link>
        </div>
        <div className="flex items-start justify-start w-full h-full  cursor-pointer px-3">
          <Link href="/workflows/lists/new">
          <FocusCard>
            {" "}
            <div className="flex items-center justify-center w-full h-40">
              Create new content list here <br />
              intresting lists for an intresting feed <br />
              sometimes we need only a coulpe of people in the feed{" "}
            </div>
          </FocusCard>{" "}
          </Link>
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
