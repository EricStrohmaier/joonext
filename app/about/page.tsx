import React from "react";
import LayoutCardComponent from "../components/LayoutCard";

export default function page() {
  return (
    <LayoutCardComponent>
      {" "}
      <div className="flex justify-center">
        <div className="space-y-4 text-lg">
          <div className="text-lg font-bold">Discover the Vision</div>
          <div>
            Everything I&apos;m crafting here is driven by my imagination and
            aspirations.
          </div>
          <div className="font-bold">A New Perspective</div>
          <div>
            I&apos;ve always grappled with mainstream social media apps. They steal
            focus and bombard you with content you didn&apos;t ask for. In essence,
            they&apos;re all about consumption, not creation.
          </div>
          <div>
            We won&apos;t delve into the complex world of how big corporations profit
            from your data and advertising. (Check these{" "}
            <a className="text-blue-500 underline" href="#">
              links
            </a>{" "}
            if you&apos;re curious.)
          </div>
          <div>
            What excites me about Nostr is the ability to build your own
            applications on an existing infrastructure, effortlessly. And it&apos;s
            not as complex as you might think!
          </div>
          <div className="text-lg font-bold">My Vision</div>
          <div>
            This platform is designed for minimalism and efficiency, so your
            work remains uninterrupted. No clutter, no distractions, just pure
            functionality. You won&apos;t see metrics like followers or likes, but
            the functionality is there if you need it.
          </div>
          <div className="mt-12">
            Expect a standard WorkingFeed mode with full control over your
            connections.
          </div>
          <div>
            Create lists, build communities, and grow your fanbase with ease.
          </div>
          <div>
            Stay in control with time-blocking schedules. Customize when your
            feed goes silent and when it&apos;s active.
          </div>
          <div>
            Our focus is on creating. Whether it&apos;s crafting short-form or
            long-form content using AI to enhance your creations.
          </div>
          <div>
            Hopefully there will be an oneTask productivity tool. Answer
            goal-oriented questions, choose to post them or keep them in a
            private archive, and track your progress. A dashboard with weekly
            insights is also in the works.
          </div>
        </div>
      </div>
    </LayoutCardComponent>
  );
}
