import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackwardSvg = (props) => (
  <Svg
    width={9}
    height={18}
    viewBox="0 0 9 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.9999 16.438L7.9549 17.5L0.288896 9.71C0.104397 9.5197 0.0012207 9.26505 0.0012207 9C0.0012207 8.73495 0.104397 8.4803 0.288896 8.29L7.9549 0.5L8.9999 1.563L1.6819 9L8.9999 16.438Z"
      fill="black"
    />
  </Svg>
);
export default BackwardSvg;
