import { NextPage } from "next";

import { Map } from "../components/Map";
import { ShopInfo } from "../components/ShopInfo";
import { Title } from "../components/Title";
import { getConvertedData } from "../converter/getConvertedData";

type SlackHistories = any[];
type SlackUsers = any[];

type Props = {
  slackHistories: SlackHistories;
  restaurantsData: any;
};

type SlackData = {
  user: string;
  name: string;
  address: string;
  comment: string;
  url: string;
};

const IndexPage: NextPage<Props> = ({ slackHistories, restaurantsData }) => (
  <main>
    <Title />
    <Map />
    <ShopInfo />
  </main>
);

export default IndexPage;

const getSlackHistories = async (ctx: any) => {
  try {
    const host = ctx.req.headers.host || "localhost:3000";
    const protocol = /^localhost/.test(host) ? "http" : "https";
    const jsonData = await fetch(
      `${protocol}://${host}/api/slack_history`,
    ).then((data) => data.json());
    return jsonData;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const getSlackUsers = async (ctx: any) => {
  try {
    const host = ctx.req.headers.host || "localhost:3000";
    const protocol = /^localhost/.test(host) ? "http" : "https";
    const jsonData = await fetch(`${protocol}://${host}/api/slack_users`).then(
      (data) => data.json(),
    );
    return jsonData;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const getAttachmentsInfoFromMessage = (history: any) => {
  if (
    !history ||
    !Array.isArray(history.attachments) ||
    !history.attachments[0]
  ) {
    return { url: "", name: "" };
  }
  return {
    url: history.attachments[0].from_url || "",
    name: history.attachments[0].title || "",
  };
};

const getUserName = (slackUsers: SlackUsers, userId: string) => {
  const targetUser = slackUsers.find((user) => user && user.id === userId);
  return targetUser ? targetUser.name : "";
};

const convertData = (
  slackHistories: SlackHistories,
  slackUsers: SlackUsers,
): SlackData[] => {
  return slackHistories
    .filter((history) => history.subtype !== "channel_join")
    .map((history) => {
      const { url, name } = getAttachmentsInfoFromMessage(history);
      const userName = getUserName(slackUsers, history.user);
      return {
        name,
        url,
        user: userName,
        address: "",
        comment: history.text,
      };
    });
};

export const getServerSideProps = async (ctx: any) => {
  const slackHistories = await getSlackHistories(ctx);
  const slackUsers = await getSlackUsers(ctx);
  const restaurantsData = convertData(slackHistories, slackUsers);
  console.log("restaurantsData", restaurantsData);
  const hoge = await getConvertedData(restaurantsData);
  console.log("hoge", hoge);
  return {
    props: {
      slackHistories,
      restaurantsData: hoge,
    },
  };
};
