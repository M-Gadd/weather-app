import React from "react";
import { usePosition } from "../hooks/usePosition";
import Weather from "./Weather";

function App() {
  const { position, error, isLoading } = usePosition();

  if (error) {
    console.log(error);
  }

  return (
    <div style={{ textAlign: "center" }}>
      {!isLoading && position && (
        <Weather lat={position.latitude} long={position.longitude} />
      )}
    </div>
  );
}

export default App;
