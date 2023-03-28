export default async function handler(req, res) {
  const { query } = req;

  const googleTextSearchEndPoint =
    "https://maps.googleapis.com/maps/api/place/textsearch/json";

  const response = await fetch(
    `${googleTextSearchEndPoint}?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&query=${query.text}`,
  );

  const data = await response.json();

  res.status(200).json(data.results);
}
