import React from "react";
import { Link } from "react-router-dom";
import { FourOFourStyle } from "./404-component-style";
const FourOFourComponent = () => {
  return (
    <FourOFourStyle>
    <div className="four">
      <h1>404 Component</h1>
      <Link to="/leetcode/:1">Go to Home</Link>
    </div>
    </FourOFourStyle>
  );
};
export default FourOFourComponent;