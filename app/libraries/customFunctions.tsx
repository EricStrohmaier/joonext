import { getMyProfile } from "./Nostr";

export async function getAnyUserProfile(following: string[]) {
    try {
      const userDataPromises = following?.map((entry) => {
        const user = getMyProfile(entry);
        return user;
      });

      // Wait for all promises to resolve
      const userData = await Promise.all(userDataPromises);
      if (userData) {
        return userData;
      }
    } catch (error) {
      console.error("Error fetching user profiles:", error);
      throw error;
    }
  }