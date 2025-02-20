import bg from "../images/bluegrid.png";
import survival from "../images/survival.png";
// import grundfos from "../images/grundfos.png";
import { EventCard } from "../components/Card";
import Contact from "../components/contact";
import { Welcome } from "../components/Welcome";
import Nav from "../components/Nav";
import About from "../components/About";
import HamburgerMenu from "../components/hamburgerMenu";

export function Home({
  eventsRefbig,
  eventsRefsmol,
  aboutRef,
  contactRef,
  scrollToEventsBig,
  scrollToEventsSmol,
  scrollToAbout,
  scrollToContact,
  menuItems,
}) {
  return (
    <>
      <div className="hidden md:block">
        <Nav
          scrollToAbout={scrollToAbout}
          scrollToEvents={scrollToEventsBig}
          scrollToContact={scrollToContact}
        />
      </div>
      <div className="md:hidden">
        <HamburgerMenu menuItems={menuItems} />
      </div>
      <Welcome
        scrollToEventsSmol={scrollToEventsSmol}
        scrollToEventsBig={scrollToEventsBig}
      />
      {/* <div className="w-screen h-60 bg-black flex flex-col items-center text-white">
        <h2 className="text-4xl md:text-6xl leading-tight">SPONSORED BY</h2>
        <img src={grundfos} alt="Sponsor logo" className="mt-4 w-auto h-40" />
      </div> */}

      {/* Large screens */}
      <div>
        <div
          id="eventpage"
          className="hidden md:block w-screen min-h-screen bg-black bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container mx-auto px-4">
            <h2
              ref={eventsRefbig}
              className="text-8xl leading-tight pt-8 pb-4 text-white text-center"
            >
              Events
            </h2>
            <div className="flex justify-center mx-auto py-8">
              <div className="w-4/5 max-w-5xl">
                <EventCard
                  image={survival}
                  alt="Survival Showdown"
                  title="Survival Showdown"
                  where="SurvivalShowdown"
                  desc="An escape room where you have to complete a series of exciting tasks. The clock will be ticking, pressure will be high, go through all the levels and escape the room."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small screens */}
      <div className="md:hidden">
        <h2
          ref={eventsRefsmol}
          className="text-6xl leading-tight mb-8 text-white text-center pt-8 bg-black"
        >
          Events
        </h2>
        <div
          className="w-screen bg-black bg-cover bg-center py-8 px-6"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="max-w-2xl mx-auto">
            <EventCard
              image={survival}
              alt="Survival Showdown"
              title="Survival Showdown"
              where="SurvivalShowdown"
              desc="An escape room where you have to complete a series of exciting tasks. The clock will be ticking, pressure will be high, go through all the levels and escape the room."
            />
          </div>
        </div>
      </div>

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}