import { SlackData } from "../mock/slackData";

type ResultData = {
  name: string;
  lat: number;
  lng: number;
  comment: string;
  url: string;
  user?: string;
}[];

export const getConvertedData = async (slackDataList: SlackData[]) => {
  /* console.log("slackDataList", slackDataList); */
  const datalist = await Promise.all(
    slackDataList.map((slackData) => {
      return fetch(
        `http://localhost:3000/api/googleTextSearch?text=${encodeURIComponent(
          slackData.name,
        )}`,
      ).then((res) => res.json());
    }),
  );

  console.log({ datalist });

  const result: ResultData = datalist
    .map((data, index) => {
      // console.log({ value: data.value });

      const target = data[0];
      console.log("target", target);
      if (!target || !target.geometry) {
        return null;
      }
      const { lat, lng } = target.geometry.location;

      const resultData = {
        name: target?.name || "",
        lat: lat,
        lng: lng,
        comment: slackDataList[index]?.comment,
        url: slackDataList[index]?.url,
        user: slackDataList[index]?.user,
      };

      return resultData;
    })
    .filter((data) => !!data);

  return result;
};
