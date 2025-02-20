export function Button({ className = "", what, onClick, extras = "" }) {
  return (
    <button
      className={`bg-gradient-to-r from-[#5a0a0a] to-[#8a1e1e] font-light px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2 text-white ${className} ${extras}`}
      onClick={onClick}
    >
      {what}
    </button>
  );
}
