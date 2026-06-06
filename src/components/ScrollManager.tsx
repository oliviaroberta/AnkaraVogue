import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, navigationType]);

  return null;
};
