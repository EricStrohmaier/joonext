'use client'

import { FC, useContext, useEffect, useState } from "react";
import { IdentityContextType } from "@/app/types/IdentityType";
import { IdentityContext } from "@/app/providers/IdentityProvider";
import { getMyRelays } from "@/app/libraries/Nostr";
import { log } from "console";

interface ShowRelaysProps {}

const ShowRelays: FC<ShowRelaysProps> = () => {
  const hardRelays = [
    "wss://nos.lol",
    "wss://nostr-pub.wellorder.net",
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://nostr.wine/",
  ];
  const {identity} = useContext<IdentityContextType>(IdentityContext)
  // const { getUser } = useNDK();

  const [relays, setRelays] = useState({}); // Initialize with an empty array

  useEffect(() => {
    if (identity) {
      const hex = identity?.pubkey;
      console.log("hex", hex);
      
      const fetchRelays = async () => {
        try {
          const relayData = await getMyRelays(hex as string)
            .then((result) => {
              console.log("result", result);
              setRelays(result);
              return result
            });
            
        } catch (error) {
          console.error("Error fetching relays:", error);
        }
      };
      fetchRelays();
    }
  }, [ identity]);

  if (!identity) {
    return (
      <div className="mx-2 my-2 md:px-4 md:mx-0">
        {hardRelays.map((relay, index) => (
          <div key={index}>
            <h3 className="inline-flex">{relay}</h3>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-2 my-2 md:px-4 md:mx-0">
      {relays && typeof relays === 'object' && Object.keys(relays).length > 0 ? (
        Object.keys(relays).map((url) => (
          <div key={url}>
            <h3 className="inline-flex">{url}</h3>
          </div>
        ))
      ) : (
        <p>No relays to display.</p>
      )}
    </div>
  );
  
  
};

export default ShowRelays;
