import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "./Sidebar";
import HomeComponent from "./Home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="main">
        <Sidebar />
        <HomeComponent />
      </main>
    </>
  );
}
