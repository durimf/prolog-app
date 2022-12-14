import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { SidebarNavigation } from "@components/SidebarNavigation";

export default function Home() {
  //for Testing ESLint
  // const a = "b";
  return (
    <div>
      <Head>
        <title>Prolog App</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SidebarNavigation />
      </main>
    </div>
  );
}
