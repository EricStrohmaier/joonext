"use server";

import axios from "axios";
import { IgApiClient } from "instagram-private-api";
import { get } from "request-promise";

export async function postToInsta(imageUrl: string, caption: string, username: string, password: string) {
  const ig = new IgApiClient();
  ig.state.generateDevice(username);
  await ig.account.login(username, password);

  const imageBuffer = await get({url: imageUrl, encoding: null})

 
 await ig.publish.photo({
    file: imageBuffer,
    caption: caption,
  });
}

export async function getInstaLogin(username: string, password: string) {
  const ig = new IgApiClient();

  ig.state.generateDevice(username);
  await ig.account.login(username, password);

  const userData = {
    username: ig.account.currentUser(),
  };
  console.log(userData);

  return { success: true, data: userData };
}
