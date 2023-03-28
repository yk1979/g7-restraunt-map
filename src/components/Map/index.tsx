import { GoogleMap, Marker } from "@react-google-maps/api";
import { memo } from "react";

import { G7_ADDRESS } from "../../constants";
import { getLatLngData } from "../../converter/getLatLngData";
import { RESTAURANTS } from "../../mock/restaurants";
import { slackDataList } from "../../mock/slackData";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const MapComponent: React.FC = () => {
  getLatLngData(slackDataList);

  // マーカーをクリックするとレストランの名称を取得する
  const selectRestaurant = (e) => {
    console.log(e);
  };
  // リストに登録されたお店の分だけマーカーを作成する
  const marker = RESTAURANTS.map((restaurant, index) => {
    return (
      <Marker
        position={{
          lat: restaurant.lat,
          lng: restaurant.lng,
        }}
        key={index}
        onClick={selectRestaurant}
      />
    );
  });
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={G7_ADDRESS} zoom={16}>
      <Marker position={G7_ADDRESS} />
      {marker}
    </GoogleMap>
  );
};

export const Map = memo(MapComponent);
