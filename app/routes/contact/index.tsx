import gal1 from "./weather-drawing.png";
import gal2 from "./yearbook-drawing.png";
import gal3 from "./dictionary-drawing.png";
import gal4 from "./clock-drawing.png";

export default function contact() {
  return (
    <div className="m-auto px-4">
      <h1 className="text-7xl mt-11 mb-8 pb-8 border-b border-neutral-700">
        Contact
      </h1>
      <h2 className="text-4xl font-bold my-4">
        Let's make something together.
      </h2>

      <a href="mailto:hello@mandyhartman.dev" className="text-2xl font-normal">
        hello@mandyhartman.dev
      </a>

      {/* Gallery Container */}
      {/* <div className="flex md:flex-nowrap flex-wrap  gap-4 mt-8">
        <img
          src={gal1}
          alt="weather app drawing"
          className="md:w-auto w-full h-48 object-cover"
        />
        <img
          src={gal2}
          alt="yearbook image drawing"
          className="md:w-auto w-full h-48 object-cover"
        />
        <img
          src={gal3}
          alt="dictionary app drawing"
          className="md:w-auto w-full h-48 object-cover"
        />
        <img
          src={gal4}
          alt="clock app drawing"
          className="md:w-auto w-full h-48 object-cover"
        />
      </div> */}
    </div>
  );
}
