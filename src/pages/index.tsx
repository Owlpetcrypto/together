import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Together.</h1>
        <ul>
          <li>Explore</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </header>
      <hr></hr>

      <section>
        <h1 className="title">
          <span className="style1">A social app that is,</span>
          <span className="style2">well,</span>
          <span className="style3">truly social.</span>
        </h1>

        <article>
          <p>
            Despite being more connected, people struggle to build meaningful
            connections, leading to rising loneliness rates. Solutions are
            needed to connect people in new locations or while traveling.
          </p>
        </article>

        <button>Sign Up</button>

        <p>insert image</p>

        <p>explore</p>

        <p>demo</p>
      </section>
    </div>
  );
}
