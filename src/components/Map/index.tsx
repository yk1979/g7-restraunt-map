import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { memo, useState } from "react";
import { atom, useRecoilState } from "recoil";

import { G7_ADDRESS } from "../../constants";
import { RESTAURANTS } from "../../mock/restaurants";

const containerStyle = {
  width: "100%",
  height: "600px",
};

export const selectedMarkerState = atom({
  key: "selectedMarkerState",
  default: undefined,
});

const MapComponent: React.FC = () => {
  const [selectedMarker, setSelectedMarker] =
    useRecoilState(selectedMarkerState);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  // マーカーをクリックするとレストランの名称を取得する
  const selectRestaurant = (id: string, index: number) => {
    setSelectedMarker(id);
    if (isOpen === false) {
      setIsOpen(true);
    }
    setSelectedIndex(index);
  };
  // 吹き出しのクローズボタンを押下すると選択状態をリセットする
  const resetSelectedId = () => {
    setSelectedMarker(null);
    setSelectedIndex(null);
    setIsOpen(false);
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
                selectRestaurant(shopId, index);
              }}
              label={{ text: `${index + 1}`, color: "#fff" }}
            >
              {isOpen && index === selectedIndex && (
                <InfoWindow
                  onCloseClick={() => {
                    resetSelectedId();
                  }}
                >
                  <div>{restaurant.name}</div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export const Map = memo(MapComponent);
