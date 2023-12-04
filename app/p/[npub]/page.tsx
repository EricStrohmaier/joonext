"use client";

import AboutProfile from "@/app/components/AboutProfile";
import { message } from "@/app/icons";
import { getMyProfile } from "@/app/libraries/Nostr";
import { IdentityContext } from "@/app/providers/IdentityProvider";
import { ThemeContext } from "@/app/providers/theme";
import { IdentityContextType } from "@/app/types/IdentityType";
import { Metadata } from "@/app/types/nostr";
import { useParams } from "next/navigation";
import { nip19 } from "nostr-tools";
import { FC, useContext, useEffect, useState } from "react";

interface ProfileProps {}

const ProfileLogic: FC<ProfileProps> = () => {
  const { npub } = useParams();
  const [metadata, setMetadata] = useState<Metadata>({});
  const { darkMode } = useContext(ThemeContext);
  const { identity } = useContext<IdentityContextType>(IdentityContext);

  const styleing = darkMode ? "border-textDark " : "border-textLight";

  const hex = npub ? nip19.decode(`npub1${npub}`).data.toString() : null;

  useEffect(() => {
    const getUserProfile = async () => {
      const loadedProfile = await getMyProfile(hex as string);
      setMetadata(loadedProfile);
    };
    getUserProfile();
  }, [hex]);

  return (
    <>
      <div className="w-full h-fit ">
        <div className="-m-6 -mt-12">
          <div className="w-full h-full">
            {metadata.banner && (
              <img
                className="object-cover w-full h-32 mb-4"
                src={metadata?.banner}
                alt={`${metadata?.displayName}'s banner`}
              />
            )}
          </div>

          <AboutProfile
            displayName={metadata?.displayName}
            picture={metadata?.picture}
            about={metadata?.about}
            message={message}
            lud16={metadata?.lud16}
            nip05={metadata?.nip05}
            website={metadata?.website}
          />
          <div className={`border-[0.5px] ${styleing}`}></div>
        </div>

        <div className="">
          {/* <Timer />
          <PersonalFeed /> */}
        </div>
      </div>
    </>
  );
};

export default ProfileLogic;

// dropdown buttons ?
{
  /* <div className="absolute right-0 z-10 flex flex-col w-56 gap-2 p-2 bg-black border-2 rounded-md shadow-lg border-neutral-500">
  <button className="btn btn-sm">Copy Link</button>
  <button className="btn btn-sm">Copy User ID</button>
  <button className="btn btn-sm">Show QR code</button>
  <button className="btn btn-sm">Copy Raw Data</button>
</div>; */
}
// if (status == "loading") {
//   return (
//     <LayoutPage>
//       <div className="flex items-center justify-center h-full overflow-hidden text-xs shadow-md xl:rounded-xl">
//         <div className="flex items-center justify-center">
//           {" "}
//           <Spinner />
//         </div>
//       </div>
//     </LayoutPage>
//   );
// }
