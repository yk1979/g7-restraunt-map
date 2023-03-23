import { NextPage } from "next";
import { Sample } from "../components/sample";

const IndexPage: NextPage = () => (
  <main>
    <h1>Hello Next.js 👋</h1>
    <Sample text="銀座はカレー天国" />
  </main>
);

export default IndexPage;
