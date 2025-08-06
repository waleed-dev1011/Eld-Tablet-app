import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CrossIcon = props => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M18.75 5.75L5.25 19.25"
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.75 19.25L5.25 5.75"
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CrossIcon;
