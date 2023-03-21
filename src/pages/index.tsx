import { Inter } from "next/font/google";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import GetStarted from "./components/GetStarted.js";
import Footer from "./components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <GetStarted />
      <Footer />
    </div>
  );
}
