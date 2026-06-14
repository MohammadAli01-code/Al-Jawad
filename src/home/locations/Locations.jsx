import React from "react";
import { alJawadTyreBranches, alJawadBeirutBranches } from "./data";
import Location from "./Location";
const Locations = () => {
  const allLocations = [...alJawadTyreBranches, ...alJawadBeirutBranches];
  const [data, setData] = React.useState(allLocations);
  return (
    <section className="locations">
      <h1>Locations</h1>
      <div className="locations-filter">
        <button onClick={() => setData(allLocations)}>All</button>
        <button onClick={() => setData(alJawadTyreBranches)}>Tyre</button>
        <button onClick={() => setData(alJawadBeirutBranches)}>Beirut</button>
      </div>
      <div className="locations-container">
        {data.map((location) => (
          <Location key={location.id} {...location} />
        ))}
      </div>
    </section>
  );
};

export default Locations;
