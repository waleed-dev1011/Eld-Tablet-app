import * as React from "react";
import Svg, { G, Rect, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const WarningSvg = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Layer_2" data-name="Layer 2">
      <G id="invisible_box" data-name="invisible box">
        <Rect width={48} height={48} fill="none" />
      </G>
      <G id="icons_Q2" data-name="icons Q2">
        <G>
          <Path d="M24,9,40.6,39H7.5L24,9M2.3,40A2,2,0,0,0,4,43H44a2,2,0,0,0,1.7-3L25.7,4a2,2,0,0,0-3.4,0Z" />
          <Path d="M22,19v9a2,2,0,0,0,4,0V19a2,2,0,0,0-4,0Z" />
          <Circle cx={24} cy={34} r={2} />
        </G>
      </G>
    </G>
  </Svg>
);
export default WarningSvg;
