"use server"

import axios from "axios";
import { IgApiClient } from "instagram-private-api";
 
export async function postToInsta(imageUrl: string, caption: string){

  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME!);
  await ig.account.login(process.env.IG_USERNAME!, process.env.IG_PASSWORD!);
   
    const { data: imageBuffer } = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
    });

    await ig.publish.photo({
      file: Buffer.from(imageBuffer, 'binary'),
      caption,
    });
    
}