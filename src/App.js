import React from "react";
import "./style.css";

export default function App() {
  // function OnLight() {
  //   test.src =
  //     "https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3-1200-80.jpg";
  // }
  // function OffLight() {
  //   test.src =
  //     "https://upload.wikimedia.org/wikipedia/commons/3/3a/Gluehlampe_01_KMJ.jpg";
  // }

  const [state, setState] = React.useState(false);

  const handleClick = event => {
    setState(!state);
  };

  return (
    <div>
      <p>
        <img
          src={
            state
              ? "https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3-1200-80.jpg"
              : "https://upload.wikimedia.org/wikipedia/commons/3/3a/Gluehlampe_01_KMJ.jpg"
          }
          style={{ width: "100px" }}
        />
      </p>
      <button onClick={handleClick}>Turn {state ? `Off` : `On`} Light</button>
    </div>
  );
}
