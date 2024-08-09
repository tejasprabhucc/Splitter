import { useState, useEffect } from "react";

function useWindowSize() {
  const [screenResolution, setScreenResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setScreenResolution({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenResolution;
}

export default useWindowSize;
