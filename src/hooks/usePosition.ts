import { useState, useEffect } from "react";
export interface PositionProbs {
  position: any;
  error: any;
  isLoading: boolean;
}
export const usePosition = (): PositionProbs => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /* @ts-ignore */
  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    setIsLoading(false);
  };
  const onError = (error: any) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    // geo.getCurrentPosition(onChange, onError);
    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { position, error, isLoading };
};
