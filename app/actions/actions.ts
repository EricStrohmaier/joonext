
'use server'
import axios from "axios";
import { IgApiClient } from "instagram-private-api";

export async function postToInsta(imageUrl: string, caption: string, username: string, password: string) {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME!);
  await ig.account.login(process.env.IG_USERNAME!, process.env.IG_PASSWORD!);
  // ig.state.generateDevice(username);
  // await ig.account.login(username, password);

  const { data: imageBuffer } = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  const res = await ig.publish.photo({
    file: Buffer.from(imageBuffer, "binary"),
    caption,
  });
  console.log('res', res);
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
