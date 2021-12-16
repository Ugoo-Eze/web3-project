import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Main from "../components/Main";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>MetaChat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
