import React from "react";
import Container from "react-bootstrap/Container";
import InstagramPosts from "../instagram/Insta"

var Scroll = require("react-scroll");
var Element = Scroll.Element;

function SocialIcons({ link, icon, spaceClass }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} className={spaceClass} alt="icon" />
    </a>
  );
}

const social = () => {
  return (
    <Element name="soc">
      <div className="pt-4">
        <Container fluid className="text-center" id="social">
          <h2>
            Check Out Some Pictures!
            </h2>
          <InstagramPosts/>
        </Container>
        <footer className="text-center footer bg-primary">
          <Container>
            <SocialIcons
              link="https://www.instagram.com/ruclubswim/"
              icon="https://cdn.iconscout.com/icon/free/png-512/instagram-201-599421.png?resize=1240,1240&w=50"
            />
            <SocialIcons
              link="https://www.facebook.com/groups/392739164956148"
              icon="https://cdn.iconscout.com/icon/free/png-256/facebook-264-734861.png?resize=1240,1240&w=40"
              spaceClass="pl-2"
            />
            <SocialIcons
              link="https://twitter.com/RutgersClubSwim"
              icon="https://cdn.iconscout.com/icon/free/png-256/twitter-208-555655.png?resize=1240,1240&w=40"
              spaceClass="pl-3"
            />
            <SocialIcons
              link="https://rutgers.campuslabs.com/engage/organization/SwimClub"
              icon="https://cdn.iconscout.com/icon/free/png-512/internet-2359086-1970946.png?resize=1240,1240&w=40"
              spaceClass="pl-2"
            />
          </Container>
        </footer>
      </div>
    </Element>
  );
};

export default social;
