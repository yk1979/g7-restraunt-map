import { SlackData, slackDataList } from "../mock/slackData";

type ResultData = {
  name: string;
  lat: number;
  lng: number;
  comment: string;
  url: string;
}[];

export const getLatLngData = (dataList) => {
  const geocoder = new google.maps.Geocoder();
  //   console.log(dataList);

  dataList.map(async (data, index) => {
    const dataName = data.name;

    const response = await geocoder.geocode(data.address);

    // 緯度軽度を取得する
    const lat = response["results"][0]["geometry"]["location"]["lat"];
    // const lat = response["results"][0]["geometry"]["location"]["lat"];
    // const lat = response.results[0].geometry.location.lat;
    const lng = response["results"][0]["geometry"]["location"]["lng"];

    console.log(lat);

    // const resultData = {
    //     name: data.name,
    //     lat: lat,
    //     lng: lng,
    //     comment: data.comment,
    //     url: data.url
    // }

    // return resultData;
  });

  //   const response = geocoder.geocode(
  //     "〒104-0061 東京都中央区銀座５丁目４−１５ エフローレ銀座 １階",
  //   );

  //   if (response["status"] !== "OK") {
  //     console.log("error");
  //   } else {
  //     //変換に成功した場合は緯度、経度を取得する
  //     const lat = response["results"][0]["geometry"]["location"]["lat"];
  //     const lng = response["results"][0]["geometry"]["location"]["lng"];
  //     console.log(lat);
  //     console.log(lng);
  //   }

  // 整形後の配列
  // const resultData: ResultData =
  // return
};
