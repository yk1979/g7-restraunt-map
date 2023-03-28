import { LoadScript } from "@react-google-maps/api";
import "modern-css-reset";
import React from "react";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </LoadScript>
  );
}
