import React, { Component } from 'react';

import location_img from '../../Icons/location_icon.png';

class About extends Component {
  render() {
    return (
      <div className="container">

        <div className="title">
          <h1>L.A.N.E.S.</h1>
          <h2>LIFE ASSISTANT NETWORK ENHANCED</h2>
        </div>

        <div className="about">
          <div className="article_about">
            <h2 align="center">About L.A.N.E.S:</h2>
            <p>
              Oasis is a transmedia experience that serves as a mass treatment and part of an app designed to promote healthier
              relationships and increase physical and psychological well-being. It is the next step in human evolution: the use of
              software and hardware in order to direct us towards desirable and prosperous horizons.<br></br>
              <br></br>The Oasis App contains:<br></br>

              <ol>
                <ul> An interactive calendar.</ul>
                <ul>A social network with AR mechanics and interactive content.</ul>
                <ul> An original content platform: Series, video games, movies, documentaries, music albums and videoclips, etc.</ul>
              </ol>

              <br></br>When the user completes objectives related to the improvement of their own well-being and that of their
              community, they are rewarded with Oasis Juice.<br></br>
              ‘Oasis Juice is an in-game currency that the user can later exchange for original content such as Video
              Games, Series, Movies, Music, Documentaries, etc. In fact, trading Oasis Juice is the only way to access
              content and / or advance in the story of the main video game. <br></br>
              Most importantly, the only way to receive Oasis Juice is by fulfilling personal or professional goals in the real world while having real life human
              interactions, which works as a reinforcement of healthier behaviour.’ Oasis helps you organize a goal calendar to reach your goals. <br></br>
              We support you with proposals from our health and wellness professionals team. Oasis also helps you find a wide variety of events in your area, both virtual and real,
              to start connecting with all kinds of people and sensations and, in return, get Oasis Juice.
            </p>
            <br></br>
            <h2 align="center">The Director:</h2>
            <p>
              ¨Hello, my name is Samir, I was born in Colombia, spent just about 5 years there, then I moved to Mexico for a couple of
              years and then finally came here, to Barcelona where I’ve been living for almost almost 20 years.<br></br>
              I studied Psychology, a bit of Sociology, Musical Theatre and Screenwriting for transmedia productions. I specialized in
              writing for the video game industry.<br></br><br></br>

              I’ve always had an obsession with investigating both the artistic and more clinical/scientific side of the human mind and
              the way we perceive the world. It’s partly because that’s how I’m built personality wise, but there is also a sort of
              obsession going on that has to do with some of my experiences as a child and teenager. I was born in a pretty violent
              environment, unfortunately part of my family went into the drug dealing business and that tainted my entire
              upbringing with war, deaths and prosecution… Lost part of my family, my dad, my uncle, friends, and found out about
              some really dark aspects of my own family that inevitably motivated me to dive deep into both psychology and art.<br></br><br></br>

              Honestly, in part, I didn’t have much of a choice since I developed PTSD, OCD, depression and narcissistic tendencies
              thanks to all the turmoil I was raised in… But, still, for as long as I can remember I’ve had a huge passion for the
              unexplored areas of the human mind and how such uncharted worlds talk about untapped potential.<br></br>

              So anyway, 5 years ago, after finishing up some investigative work on my family’s violent past and while I started some
              studies around the disasters of the 20th century (both from the extreme right and the extreme left in the political
              spectrum) and the aftermath we are experiencing from such history along with the consequences of the development
              of new technologies and its impact on the way we relate with ourselves and the rest of the world… I decided to start this
              Transmedia Project. <br></br><br></br>

              After the great success of Pokemon Go, an app that briefly surpased some of the biggest
              pornsites… (For more info on that check this article: Why 'Pokémon GO' Is The World's Most Important Game
              (forbes.com) ) I had no doubt that we had the technology to create great content that would induce a behavioural
              change on a great scale… Maybe even help people find some meaning, take responsibility, engage in real articulate and
              sophisticated conversation around important issues with at least a little bit more lightheartedness and definitely less
              resentment, arrogance and reductionist deceit… <br></br>The problem was, not even finding what kind of content to create, we
              already had that figured out, the problem was finding a big enough investment to help the project lift off… <br></br><br></br>
              But for the last 2 to 3 years tech has become even more affordable and, surprisingly, I found out there were lots of professionals
              interested in getting involved in such a challenging task. We are over 100 people working on the project already:)
            </p>
          </div>

          <div className="location_icon">
            Where we are? <img src={location_img} alt="Location" width="64px" height="64px" />
          </div>

          <div className="iframe__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

        </div>
      </div>
    )
  }
}
export default About;
