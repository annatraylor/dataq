import Head from "next/head";
import Components from "../components/basic/AllComponents";

export default function Basic() {
  return (
    <div>
      <Head>
        <title>DataQ</title>
        <meta name="description" content="A website for the company DataQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}