import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { memo } from "react";

import { G7_ADDRESS } from "../../constants";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const ShopListComponent: React.FC = () => {
  return (
    <div>
      <ul>
        <li>ここにお店の名前がやってくる</li>
      </ul>
    </div>
  );
};

export const Map = memo(ShopListComponent);
