import Navbar from "@/components/nav/Navbar";
import "@/styles/globals.css";
import "@ant-design/cssinjs";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
