'use client'

import { createContext } from 'react'
import usePersistedState from '../hooks/usePersistedState'
import { RelayObject } from '../types/NostrRelay'
import { IdentityContextType, IdentityType } from '../types/IdentityType'
import { defaultRelays } from '../libraries/Nostr'
import { ContactObject } from '../types/NostrContact'


const STALE_PROFILE = 1000 * 60 * 60 * 24 * 7

const defaultIdentityContext: IdentityContextType = {
  identity: null!,
  setIdentity: () => {},
  isIdentityFresh: () => {},
  relays: defaultRelays,
  setRelays: () => {},
  contacts: {},
  setContacts: () => {},
}

export const IdentityContext = createContext<IdentityContextType>(defaultIdentityContext)

type IdentityProviderProps = {
  children: React.ReactNode
}

export const IdentityProvider: React.FC<IdentityProviderProps> = ({children})=> {
  const [identity, setIdentity] = usePersistedState<IdentityType>('identity')
  const [relays, setRelays] = usePersistedState<RelayObject>('relays', defaultRelays)
  const [contacts, setContacts] = usePersistedState<ContactObject>('contacts', {})

  const isIdentityFresh = (): boolean => {
    if (identity?.last_updated && (+new Date()) - identity.last_updated < STALE_PROFILE) {
      return true 
    }
    return false
  }

  return (
    <IdentityContext.Provider value={{identity, setIdentity, isIdentityFresh, relays, setRelays, contacts, setContacts}}>
      {children}
    </IdentityContext.Provider>
  )
}