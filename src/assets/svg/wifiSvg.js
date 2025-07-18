import * as React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import {colors} from '../../util/color';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const WifiSvg = props => (
  <Svg
    fill={colors.base.green}
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Circle
      className="clr-i-solid clr-i-solid-path-1"
      cx={18}
      cy={29.54}
      r={3}
    />
    <Path
      className="clr-i-solid clr-i-solid-path-2"
      d="M32.76,9.38a27.87,27.87,0,0,0-29.57,0,1.51,1.51,0,0,0-.48,2.11l.11.17a1.49,1.49,0,0,0,2,.46,24.68,24.68,0,0,1,26.26,0,1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,32.76,9.38Z"
    />
    <Path
      className="clr-i-solid clr-i-solid-path-3"
      d="M28.82,15.44a20.59,20.59,0,0,0-21.7,0,1.51,1.51,0,0,0-.46,2.1l.11.17a1.49,1.49,0,0,0,2,.46,17.4,17.4,0,0,1,18.36,0,1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,28.82,15.44Z"
    />
    <Path
      className="clr-i-solid clr-i-solid-path-4"
      d="M24.88,21.49a13.41,13.41,0,0,0-13.82,0,1.5,1.5,0,0,0-.46,2.09l.1.16a1.52,1.52,0,0,0,2.06.44,10.27,10.27,0,0,1,10.42,0,1.52,1.52,0,0,0,2.06-.45l.1-.16A1.49,1.49,0,0,0,24.88,21.49Z"
    />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);
export default WifiSvg;
