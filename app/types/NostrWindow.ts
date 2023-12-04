import { Event, UnsignedEvent } from "nostr-tools"

export type NostrWindow = {
  getPublicKey(): Promise<string>
  signEvent() : Promise<Event>
}