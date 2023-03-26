import { Inter } from "next/font/google";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}
