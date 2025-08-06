import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PenIcon = ({color = '#2FA766', size = 18}) => (
  <Svg width={size * (19 / 18)} height={size} viewBox="0 0 19 18" fill="none">
    <Path
      d="M1 17C4.33333 15 6 13 6 11C6 8 5 8 4 8C3 8 1.968 9.085 2 11C2.034 13.048 3.658 13.877 4.5 15C6 17 7 17.5 8 16C8.66667 15 9.16667 14.1667 9.5 13.5C10.5 15.8333 11.8333 17 13.5 17H16M16 17L14 15V3C14 1.879 14.879 1 16 1C17.121 1 18 1.879 18 3V15L16 17ZM14 5H18"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PenIcon;
