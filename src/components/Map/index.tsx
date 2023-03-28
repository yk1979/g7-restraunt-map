import { GoogleMap, Marker } from "@react-google-maps/api";
import { memo } from "react";
import { atom, useRecoilState } from "recoil";

import { G7_ADDRESS } from "../../constants";
import { getLatLngData } from "../../converter/getLatLngData";
import { RESTAURANTS } from "../../mock/restaurants";
import { slackDataList } from "../../mock/slackData";

const containerStyle = {
  width: "100%",
  height: "600px",
};

export const selectedMarkerState = atom({
  key: "selectedMarkerState",
  default: undefined,
});

const MapComponent: React.FC = () => {
  getLatLngData(slackDataList);

  const [selectedMarker, setSelectedMarker] =
    useRecoilState(selectedMarkerState);
  // マーカーをクリックするとレストランの名称を取得する
  const selectRestaurant = (id: string) => {
    setSelectedMarker(id);
  };
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={G7_ADDRESS} zoom={16}>
      <Marker position={G7_ADDRESS} />
      {/* リストに登録されたお店の分だけマーカーを作成する */}
      {RESTAURANTS.map((restaurant, index) => {
        const shopId = `${restaurant.lat}+${restaurant.lng}`;
        return (
          <Marker
            position={{
              lat: restaurant.lat,
              lng: restaurant.lng,
            }}
            key={shopId}
            onClick={() => {
              selectRestaurant(shopId);
            }}
            label={{ text: `${index + 1}`, color: "#fff" }}
          />
        );
      })}
    </GoogleMap>
  );
};

export const Map = memo(MapComponent);
