import { LoadScript } from "@react-google-maps/api";
import "modern-css-reset";

export default function MyApp({ Component, pageProps }) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Component {...pageProps} />
    </LoadScript>
  );
}
