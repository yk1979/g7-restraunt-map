import { SlackData } from "../mock/slackData";

type ResultData = {
  name: string;
  lat: number;
  lng: number;
  comment: string;
  url: string;
}[];

export const getConvertedData = async (slackDataList: SlackData[]) => {
  const datalist = await Promise.all(
    slackDataList.map((slackData) => {
      return fetch(`/api/googleTextSearch?text=${slackData.name}`).then((res) =>
        res.json(),
      );
    }),
  );

  const result: ResultData = datalist.map((data) => {
    const target = data[0];
    const { lat, lng } = target.geometry.location;

    const resultData = {
      name: data.name,
      lat: lat,
      lng: lng,
      comment: data.comment,
      url: data.url,
    };

    return resultData;
  });

  return result;
};
