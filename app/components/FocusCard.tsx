import { FC, useContext } from "react";
import { ThemeContext } from "../providers/theme";

interface FocusCardProps {
  children: React.ReactNode;
  style?: string;
}

const FocusCard: FC<FocusCardProps> = ({ children, style }) => {
  const { darkMode } = useContext(ThemeContext);

  const cardStyling = darkMode ? "bg-secondaryDark " : "bg-secondaryLight";

  return (
    <div
      className={` md:w-[98%] w-full  h-full flex justify-center items-center  ${style}}`}
    >
      <div
        className={`${cardStyling} flex items-center justify-center w-full h-full p-3   rounded-2xl shadow-lg `}
      >
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-full ">{children}</div>
        </div>
      </div>{" "}
    </div>
  );
};

export default FocusCard;

