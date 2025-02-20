import React from "react";
import HamburgerMenu from "../components/hamburgerMenu";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/Button";
import bg from "../images/bluegrid.png";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";

function SurvivalShowdown({ scrollToEventsBig, scrollToAbout, scrollToContact, menuItems }) {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  function handleHomeNavigate() {
    navigate("/");
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Nav
          scrollToAbout={scrollToAbout}
          scrollToEvents={scrollToEventsBig}
          scrollToContact={scrollToContact}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <HamburgerMenu menuItems={menuItems} />
      </div>

      {/* Main Content Section */}
      <div
        className="min-h-screen flex flex-col justify-between bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-white">
          {/* Title */}
          <h1 className="mt-28 md:mt-36 text-4xl md:text-6xl leading-tight mb-12 text-center">
            SURVIVAL SHOWDOWN
          </h1>

          {/* Team Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-14">
            <Link to="/registration-ParticipantDetails/1">
              <TeamCard>
                <span className="text-red-600 font-bold">
                  CREATE TEAM <br /> →
                </span>
              </TeamCard>
            </Link>
            <Link to="/join-ParticipantDetails/1">
              <TeamCard>
                <span className="text-red-600 font-bold">
                  JOIN <br /> TEAM <br /> →
                </span>
              </TeamCard>
            </Link>
          </div>

          {/* Back to Home Button */}
          <Button what="Back to Home" onClick={handleHomeNavigate} />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default SurvivalShowdown;
