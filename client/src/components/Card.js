import { Button } from "./Button";
import { Link } from "react-router-dom";

export function EventCard(props) {
  return (
    <div
      className="flex flex-col w-full md:w-[40rem] h-[28rem] bg-cardbg items-center rounded-2xl mx-auto max-w-2xl"
      style={{
        boxShadow: "0 0 15px 2px rgba(138, 30, 30, 0.7)", // Updated red shade for shadow
      }}
    >
      {/* Image Section */}
      <div className="h-40 flex justify-center items-center">
        <img
          src={props.image}
          alt={props.alt}
          className="mt-5 mb-4 w-96 md:w-[22rem]" // Adjusted image size
        />
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-3xl font-bold mt-6 mb-2 text-white text-center">
        Survival <span className="text-red-600">Show</span>down
      </h2>

      {/* Description */}
      <p className="font-light px-10 text-center text-sm md:text-base text-white flex-grow">
        {props.desc}
      </p>

      {/* Register Button */}
      <Link to={`/registration-${props.where}`} className="mb-6 mt-4">
        <Button what="Register" />
      </Link>
    </div>
  );
}
