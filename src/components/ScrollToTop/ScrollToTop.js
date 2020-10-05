import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ location, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default withRouter(ScrollToTop);
