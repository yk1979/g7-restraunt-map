import { RESTAURANTS } from "../../mock/restaurants";

export default function handler(_, res) {
  res.status(200).json(RESTAURANTS);
}
