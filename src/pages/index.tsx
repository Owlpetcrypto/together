import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Network from "../styles/network.png";
import Calendar from "../styles/calendar.png";
import Dance from "../styles/dance.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Together./Logo</h1>
        <ul>
          {/* <Link href="get-started">GET STARTED</Link> */}
          <li>GET STARTED</li>
          <li>LOGIN</li>
          <li>SIGN UP</li>
          <li>ABOUT US</li>
        </ul>
      </header>

      <section className="middle-section">
        <h1 className="title">
          <span className="style1">A SOCIAL APP THAT IS,</span>
          <span className="style2">WELL,</span>
          <span className="style3">TRULY SOCIAL</span>
        </h1>

        <article className="description">
          <p>
            Despite being more connected, people struggle to build meaningful
            connections, leading to rising loneliness rates. Solutions are
            needed to connect people in new locations or while traveling.
          </p>
        </article>

        <button>SIGN UP</button>

        <section id="get-started">
          <div className="getting-started">
            <h1 className="started">Getting Started with Together.</h1>
            <p> Easy as 1, 2, 3</p>
          </div>

          <div className="images">
            <article className="cards">
              <p className="bold-title">Choose</p>
              <p>Choose your circle - add family, friends, colleagues.</p>
              <Image
                src={Network}
                alt="Picture of the author"
                width={200}
                height={100}
              />
            </article>

            <article className="cards">
              <p className="bold-title">Share</p>
              <p>
                Share your plans - add events or travel dates to your profile
                along with recommendations
              </p>
              <Image
                src={Calendar}
                alt="Picture of the author"
                width={200}
                height={100}
              />
            </article>

            <article className="cards">
              <p className="bold-title">Connect</p>
              <p>Connect in-person, and your social outing is on us!</p>
              <Image
                src={Dance}
                alt="Picture of the author"
                width={200}
                height={100}
              />
            </article>
          </div>
        </section>
        <p>explore</p>

        <p>demo</p>
      </section>
    </div>
  );
}
