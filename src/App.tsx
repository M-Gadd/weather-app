import React from "react";
import "./App.css";

import { usePosition } from "./hooks/usePosition";
import Weather from "./components/Weather";

function App() {
  const { position, error, isLoading } = usePosition();

  if (error) {
    console.log(error);
  }

  return (
    <div className="App">
      {!isLoading && position && (
        <Weather lat={position.latitude} long={position.longitude} />
      )}
    </div>
  );
}

export default App;
