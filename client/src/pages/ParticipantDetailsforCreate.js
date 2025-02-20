import React from "react";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import CreateTeam from "../components/CreateTeam";
import HamburgerMenu from "../components/hamburgerMenu";

export default function ParticipantDetailsforCreate({
  scrollToEventsBig,
  scrollToAbout,
  scrollToContact,
  menuItems,
  eventName,
}) {
  // Ensure the page scrolls to the top when this component loads
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

      {/* Main content */}
      <div className="w-screen h-screen bg-black bg-cover bg-center pt-[100px]">
  {/* Added padding-top to prevent overlap */}
    <div className="flex flex-col items-center text-white"> {/* Changed text-red\-600 to text-white */}
      {/* Updated "Create Your Team" text */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-14 text-center">
          Create Your Team
      </h1>
      {/* CreateTeam component */}
        <CreateTeam eventName={eventName} />
      </div>
    </div>

      {/* Footer */}
      <Footer />
    </>
  );
}