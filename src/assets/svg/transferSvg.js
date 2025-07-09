import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TransferSvg = (props) => (
  <Svg
    width={15}
    height={12}
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.19051 0L14.74 4.85692H1.05495V3.74702H11.7877L8.45797 0.834644L9.19051 0ZM0.5 7.07671H14.3737V8.18661H3.8297L6.93741 10.5174L6.27147 11.4053L0.5 7.07671Z"
      fill="#23262F"
    />
  </Svg>
);
export default TransferSvg;
