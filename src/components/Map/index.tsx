import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { memo } from "react";

import { G7_ADDRESS } from "../../constants";
import { RESTAURANTS } from "../../mock/restaurants";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const MapComponent: React.FC = () => {
  // マーカーをクリックするとレストランの名称を取得する
  const selectRestaurant = (name: string) => {
    console.log(name);
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
        onClick={() => {
          selectRestaurant(restaurant.name);
        }}
      />
    );
  });
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={G7_ADDRESS}
        zoom={16}
      >
        <Marker position={G7_ADDRESS} />
        {marker}
      </GoogleMap>
    </LoadScript>
  );
};

export const Map = memo(MapComponent);
