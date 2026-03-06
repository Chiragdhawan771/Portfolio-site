import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "../index.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="0, 210, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <div className="app-container">
          <Headermain />
          <div className="main-card">
            <AppRoutes />
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}
