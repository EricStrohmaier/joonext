import { ThemeContext } from "@/app/providers/theme";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

interface ButtonProps {
  title?: string;
  href?: string;
  style?: string;
  imgUrl?: string;
  imgStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  imgUrl,
  title,
  href,
  style,
  imgStyles,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const router = usePathname();  
  const path = router.split("/")[1];  
  const isActive = `/${path}` === href;

  const buttonStyle = `${style} ${
    isActive
      ? darkMode
        ? "p-1 px-2 bg-backgroundDark bg-opacity-75"
        : "p-1 px-2 bg-backgroundLight bg-opacity-90"
      : ""
  }`;

  return (
    <div className={`w-full`}>
      <Link href={href ? href : "/"}>
        <div className={`flex justify-start items-center  rounded-[10px]  ${buttonStyle}`}>
          {imgUrl && (
            <div className="w-[34px] h-[34px] lg:mr-2 rounded-[10px] flex justify-center items-center">
              {" "}
              <Image
                src={imgUrl}
                alt=""
                className={`w-full h-full overflow-hidden rounded-[8px] z-0 ${imgStyles}`}
                style={darkMode ? { filter: "invert(1)" } : {}}
              />
            </div>
          )}

          {title && (
            <div className="items-center justify-center hidden font-bold text-center text-md h-fit w-fit lg:flex">
              <div>{title}</div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Button;
