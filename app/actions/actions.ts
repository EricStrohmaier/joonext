
'use server'
import { IgApiClient } from "instagram-private-api";
import { get } from "request-promise";

export async function postToInsta(imageUrl: string, caption: string,) {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME!);
  await ig.account.login(process.env.IG_USERNAME!, process.env.IG_PASSWORD!);

  const imageBuffer = await get({url: imageUrl, encoding: null})

 
 const result =  ig.publish.photo({
    file: imageBuffer,
    caption: caption,
  });
  console.log(result);
  
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
