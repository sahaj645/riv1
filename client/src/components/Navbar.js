import React from "react";

export function NavbarContainer({ children }) {
  return (
    <nav
      className="w-1/3 hidden md:flex justify-around items-center bg-[#0a0a0a] p-3 rounded-full h-14 z-10"
      style={{
        boxShadow: "0 0 15px 2px rgba(138, 30, 30, 0.7)", // Updated red shade for shadow
      }}
    >
      {children}
    </nav>
  );
}

export function NavItem({ children, onClick }) {
  return (
    <button
      className="text-white no-underline text-base font-light px-4 py-1 rounded-full transition-colors duration-300 ease-in-out hover:bg-white/10 focus:bg-[#8a1e1e]" // Updated focus color to red
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function RegisterButton({ href, children }) {
  return (
    <a
      href={href}
      className="m-2 text-white no-underline text-lg p-2.5 rounded-xl transition-colors duration-300 ease-in-out hover:bg-white/10 focus:bg-[#8a1e1e]" // Updated focus color to red
    >
      {children}
    </a>
  );
}
