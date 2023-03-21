import React from 'react'

function Main() {
  return (
    <section className="main">
      <h1 className="title">
        <span className="style1">A SOCIAL APP THAT IS,</span>
        <span className="style2">WELL,</span>
        <span className="style3">TRULY SOCIAL</span>
      </h1>

      <div className="main__circle"></div>

      <article className="main__description">
        <p>
          Discover Together, the social app that redefines meaningful
          connections in our increasingly isolated world. Unaware that a friend
          or family member is nearby during your travels? Together bridges the
          gap and creates cherished memories with those who matter most,
          wherever you go.
        </p>
      </article>

      <form>
        <input type="email" placeholder="Email Address"></input>
        <button className="button" type="submit">
          Join the Waitlist
        </button>
      </form>

      <hr></hr>
    </section>
  )
}

export default Main
