import { WebClient } from "@slack/web-api";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_SLACK_ACCESS_TOKEN;
const CHANNEL_ID = "C04L0V5MTUK";

// Initialize
const client = new WebClient(ACCESS_TOKEN);

export default async function handler(_, res) {
  let result;
  try {
    result = await client.conversations.history({
      channel: CHANNEL_ID,
    });

    /* console.log(result.messages); */
  } catch (e) {
    /*  console.log(e); */
  }

  res.status(200).json(result.messages);
}
