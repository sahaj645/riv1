import React from "react";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import HamburgerMenu from "../components/hamburgerMenu";
import JoinTeam from "../components/JoinTeam";

export default function ParticipantDetailsforJoin({
  scrollToEventsBig,
  scrollToAbout,
  scrollToContact,
  menuItems,
  eventName,
}) {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {/* Navbar for desktop */}
      <div className="hidden md:block fixed top-0 left-0 w-full z-50 bg-black shadow-lg">
        <Nav
          scrollToAbout={scrollToAbout}
          scrollToEvents={scrollToEventsBig}
          scrollToContact={scrollToContact}
        />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black shadow-lg">
        <HamburgerMenu menuItems={menuItems} />
      </div>

      {/* Main content with extra padding to prevent overlap */}
      <div className="w-screen h-screen bg-black bg-cover bg-center pt-[100px]">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-6xl leading-tight mt-14 text-center">
            Join a Team
          </h1>
          <JoinTeam eventName={eventName} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
