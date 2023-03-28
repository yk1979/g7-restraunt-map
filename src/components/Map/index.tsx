import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { memo } from "react";

import { G7_ADDRESS } from "../../constants";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const MapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={G7_ADDRESS}
        zoom={16}
      >
        <Marker position={G7_ADDRESS} />
      </GoogleMap>
    </LoadScript>
  );
};

export const Map = memo(MapComponent);
