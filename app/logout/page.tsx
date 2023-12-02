"use client"
import { useContext, useEffect } from "react";
import { IdentityContextType } from "../types/IdentityType";
import { IdentityContext } from "../providers/IdentityProvider";
import { useRouter } from "next/navigation";
import { localStorageKey } from "../libraries/EncryptAndStoreLocal";

 const Logout = () => {
    const {identity, setIdentity, setContacts} = useContext<IdentityContextType>(IdentityContext)
    const router = useRouter();


  useEffect(() => {
    const wipe = async () => {
        setIdentity(null)
        setContacts([])
      }
      wipe()
    console.log("You are not really Logged out");
    router.push("/");
}, [router, setIdentity, setContacts]);

  return <div></div>;
};

export default Logout;