import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const UploadSvg = (props) => (
  <Svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    width="800px"
    height="800px"
    viewBox="0 0 52 52"
    enableBackground="new 0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <Path d="M48.5,31h-3c-0.8,0-1.5,0.8-1.5,1.5v10c0,0.8-0.7,1.5-1.5,1.5h-33C8.7,44,8,43.3,8,42.5v-10 C8,31.8,7.3,31,6.5,31h-3C2.7,31,2,31.8,2,32.5V46c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V32.5C50,31.8,49.3,31,48.5,31z" />
      <Path d="M27,2.4c-0.6-0.6-1.5-0.6-2.1,0L11.4,15.9c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l5.6-5.6 c0.6-0.6,1.8-0.2,1.8,0.7v21.2c0,0.8,0.6,1.5,1.4,1.5h3c0.8,0,1.6-0.8,1.6-1.5V15.3c0-0.9,1-1.3,1.7-0.7l5.6,5.6 c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1L27,2.4z" />
    </G>
  </Svg>
);
export default UploadSvg;
