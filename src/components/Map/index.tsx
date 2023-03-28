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
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={G7_ADDRESS}
        zoom={16}
      >
        <Marker position={G7_ADDRESS} />
        {/* リストに登録されたお店の分だけマーカーを作成する */}
        {RESTAURANTS.map((restaurant, index) => (
          <Marker
            position={{
              lat: restaurant.lat,
              lng: restaurant.lng,
            }}
            key={`${restaurant.lat}+${restaurant.lng}`}
            onClick={() => {
              selectRestaurant(restaurant.name);
            }}
            label={{ text: `${index + 1}`, color: "#fff" }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export const Map = memo(MapComponent);
