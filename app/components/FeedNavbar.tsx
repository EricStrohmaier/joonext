import { FC, useContext, useState } from "react";
import ActionButton from "./CommonUI/ActionButton";
import { Dialog, Transition } from "@headlessui/react";
import ShowRelays from "./CommonUI/ShowRelays";
import { moon, server, sun, watch } from "../icons";
import { IdentityContextType } from "../types/IdentityType";
import { IdentityContext } from "../providers/IdentityProvider";
import { ThemeContext } from "../providers/theme";
import Image from "next/image";
import { TimeContext } from "../providers/time";

interface FeedNavbarProps {
  children?: React.ReactNode;
}

const FeedNavbar: FC<FeedNavbarProps> = ({children}) => {
  const { darkMode , toggleDarkMode} = useContext(ThemeContext);
  const { currentTime } = useContext(TimeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {identity} = useContext<IdentityContextType>(IdentityContext)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //dynamic relay list???
  const relay = <ShowRelays />;

  return (
    <div
      className="w-full px-2 my-5 mt-7"
      style={{
        position: "sticky", // Make the nav sticky to the top
        top: 0,
        zIndex: 20,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div
          className={`flex justify-center px-2 items-center text-md font-semibold hover:shadow-md border-2 rounded-[70px] w-fit p-1 shadow-md transition duration-0 `}
        >
          <Image
            alt="watch"
            src={watch}
            className="max-w-6 max-h-6"
            style={darkMode ? { filter: "invert(1)" } : {}}
          />

          <p className={`text-sm ml-[5px]`}> {currentTime}</p>
        </div>

        <div className="flex items-center space-x-1 lg:space-x-3">
        <div>
          {children}
        </div>
          <ActionButton
            title={`Show connected relay's`}
            svg={server}
            onClick={openModal}
          />
          <ActionButton
            title="Toggle Theme"
            {...(darkMode ? { svg: sun } : { svg: moon })}
            onClick={toggleDarkMode}
          />
        </div>
      </div>

      <Transition show={isModalOpen}>
        <Dialog onClose={closeModal}>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

            <div className="z-50 w-4/5 max-w-md p-6 bg-gray-100 rounded-[40px]  shadow-xl lg:w-full">
              <Dialog.Title className="mb-4 text-lg font-medium">
                {identity
                  ? "You are connected with these relays"
                  : "Connected to Relay's"}
              </Dialog.Title>

              <div className="text-sm text-gray-500">{relay}</div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FeedNavbar;
