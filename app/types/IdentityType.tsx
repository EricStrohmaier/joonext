import { RelayObject } from './NostrRelay'
import { ContactObject } from './NostrContact'

export type IdentityType = {
  pubkey: string
  last_updated?: number // record the last time the profile was updated from relays. This also serves as a marker that the account has been loaded. Updated in Login component.
  name?: string
  username?: string
  display_name?: string
  displayName?: string
  about?: string
  nip05?: string
  website?: string
  picture?: string
  banner?: string
  lud16?: string
  [key: string]: unknown
}

export type IdentityContextType = {
  identity: IdentityType,
  setIdentity: Function,
  isIdentityFresh: Function,
  relays: RelayObject,
  setRelays: Function,
  contacts: ContactObject,
  setContacts: Function,
}
