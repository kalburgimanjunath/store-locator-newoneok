import { DISTRIBUTORS } from "../data/distributor";
import FilterDistributor from "./filterDistributor";
import { useState } from "react";
import MapDistributor from "./mapDistributor";
export default function StoreLocator() {
  const [location, setLocation] = useState("");
  const filterLocations = DISTRIBUTORS.filter((item) => {
    return item.address.toLowerCase().includes(location.toLowerCase());
  });
  return (
    <div>
      <h1>Store Locator</h1>
      <FilterDistributor setLocation={setLocation} />
      <div className="grid grid-cols-2 border-2 shadow-lg">
        <MapDistributor />
        <div className="p-4 text-left">
          <h3 className="font-bold text-2xl border-b-2 p-2">Distributors</h3>
          {filterLocations &&
            filterLocations.map((item) => {
              return (
                <div
                  key={item.name}
                  className="p-2 cursor-pointer hover:bg-pink-300"
                >
                  {item.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
