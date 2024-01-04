import { FC } from "react";
import LayoutPage from "../components/LayoutPage";

interface ErrorProps {}

const Custom404: FC<ErrorProps> = () => {
  return (
    <>
      <>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-extrabold">404 Error</div>
            <div className="text-2xl font-extrabold mb-9">
              This page doesn&apos;t exist.
            </div>
            <div className="text-center">
              There is a lot under development, and new features are coming.
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Custom404;
