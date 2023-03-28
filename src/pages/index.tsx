import { NextPage } from "next";

import { Map } from "../components/Map";
import { ShopInfo } from "../components/ShopInfo";
import { Title } from "../components/Title";

const IndexPage: NextPage = () => (
  <main>
    <Title />
    <Map />
    <ShopInfo />
  </main>
);

export default IndexPage;
