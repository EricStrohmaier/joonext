"use client";

import { useContext, useState } from "react";
import { IdentityContextType } from "../types/IdentityType";
import { IdentityContext } from "../providers/IdentityProvider";
import { getPublicKey } from "../libraries/NIP-07";
import { useRouter } from "next/navigation";
import { defaultContacts, defaultRelays, getMyContacts, getMyProfile, getMyRelays } from "../libraries/Nostr";


export const LoginExtension = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIdentity , setContacts, setRelays} = useContext<IdentityContextType>(IdentityContext);
  const router = useRouter();

  const signIn = async () => {
    setIsLoading(true);
    const pubkey = await getPublicKey();

    if (pubkey) {
      // store pubkey in identity provider
      setIdentity({ pubkey: pubkey });
      const loadedProfile = await getMyProfile(pubkey)
      const profile = {...loadedProfile, pubkey: pubkey, last_updated: +new Date()}
      setIdentity(profile)
      const loadedRelays = await getMyRelays(pubkey)
      if (loadedRelays !== defaultRelays) {
        setRelays(loadedRelays)
      }
      const loadedContacts = await getMyContacts(pubkey)
      if (loadedContacts !== defaultContacts) {
        setContacts(loadedContacts)
      }
      router.push("/");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-12">
        <button
          type="button"
          onClick={signIn}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-800 px-3 py-1.5 text-white"
          disabled={isLoading}
        >
          <span className="text-sm font-semibold leading-6 md:text-lg">
            {isLoading ? "Loading..." : "Browser Extension"}
          </span>
        </button>

        <div className="mt-4 text-sm font-light leading-6 text-opacity-80 md:text-lg">
          Don&apos;t have an extension?{" "}
          <a
            href="https://getalby.com/"
            target="_blank"
            rel="noreferrer"
            className="font-light text-blue-600 group hover:text-blue-500 hover:underline"
          >
            Get yours from Alby
            <span> &rarr;</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginExtension;
