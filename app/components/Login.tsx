"use client"

import { useContext, useEffect, useState } from "react"
import {  useRouter } from "next/navigation";
import { IdentityContext } from "../providers/IdentityProvider"
import { IdentityContextType } from "../types/IdentityType"
import { defaultProfile, defaultRelays, defaultContacts, getMyProfile, getMyRelays, getMyContacts } from "../libraries/Nostr"

export const Login = () => {
  const [loading, setLoading] = useState(false)
  const {identity, setIdentity, isIdentityFresh, setRelays, setContacts} = useContext<IdentityContextType>(IdentityContext)
  const [, setIsNewProfile] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const loadProfile = async () => {
      // retrieve profile
      const loadedProfile = await getMyProfile(identity.pubkey)
      console.log('loadedProfile', loadedProfile);
      
      if (loadedProfile === defaultProfile) {
        console.log('no profile found, using defaultProfile')
        // no profile found. use default as template but add pubkey
        const newProfile = {...defaultProfile, pubkey: identity.pubkey, last_updated: +new Date()}        
        setIdentity(newProfile)
        setIsNewProfile(true)
      } else {
        const profile = {...loadedProfile, pubkey: identity.pubkey, last_updated: +new Date()}
        setIdentity(profile)
      }
      // retrieve relays
      const loadedRelays = await getMyRelays(identity.pubkey)
      if (loadedRelays !== defaultRelays) {
        setRelays(loadedRelays)
      }
      const loadedContacts = await getMyContacts(identity.pubkey)
      if (loadedContacts !== defaultContacts) {
        setContacts(loadedContacts)
      }
    }
    // redirect to homepage if login page is accessed with no identity
    if (!identity) {
      router.push("/");
    } else if (isIdentityFresh()) {
      console.log('identity is fresh')
      
    } else {
      // proceed with loading profile
      setLoading(true)
      loadProfile()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identity, /* isIdentityFresh, setIdentity, setRelays are ok to exclude */])

  return (
    <div id="login">
      <h1>Logging In...</h1>
      <label>With public key</label>
      <p>{identity ? identity.pubkey : null}</p>
      {loading ? "Loading..." : null}
    </div>
  )
}