import React from 'react'
import Image from 'next/image'
import Network from '../../styles/network.png'
import Calendar from '../../styles/calendar.png'
import Dance from '../../styles/dance.png'

function GetStarted() {
  return (
    <section id="get-started">
      <div className="getting-started">
        <h1 className="started">Get Started with Together.</h1>
        <p>
          Unite Anywhere, Anytime: Airports, Parties, Conferences, Travels,
          Concerts – Together Connects You!
        </p>
      </div>

      <div className="images">
        <article className="cards">
          <Image
            src={Network}
            alt="Picture of the author"
            width={150}
            height={100}
          />
          <p className="bold-title">Choose</p>
          <p className="cards-p">
            Choose your circle - add family, friends, colleagues.
          </p>
        </article>

        <article className="cards">
          <Image
            src={Calendar}
            alt="Picture of the author"
            width={150}
            height={50}
          />
          <p className="bold-title">Share</p>
          <p className="cards-p">
            Share your plans - add events or travel dates to your profile along
            with recommendations
          </p>
        </article>

        <article className="cards">
          <Image
            src={Dance}
            alt="Picture of the author"
            width={150}
            height={100}
          />
          <p className="bold-title">Connect</p>
          <p className="cards-p">
            Connect in-person, and your social outing is on us!
          </p>
        </article>
      </div>
    </section>
  )
}

export default GetStarted
