import React from "react";
import Cards from "./components/Cards";

import "./App.css";

import dummyProfiles from "./dummyprofiles";

export default function App() {
  return (
    <div>
      {dummyProfiles.map(profile => {
        return (
          <Cards
            key={profile.id}
            id={profile.id}
            imgURL={profile.imgURL}
            pName={profile.pName}
            pJob={profile.pJob}
            pDesc={profile.pDesc}
          />
        );
      })}
    </div>
  );
}
