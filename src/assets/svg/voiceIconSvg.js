import React from 'react';
import Svg, {Path} from 'react-native-svg';

const VoiceIcon = ({color = 'black', ...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M12.9173 4.58268C12.9173 2.97185 11.6115 1.66602 10.0007 1.66602C8.38982 1.66602 7.08398 2.97185 7.08398 4.58268V9.99935C7.08398 11.6102 8.38982 12.916 10.0007 12.916C11.6115 12.916 12.9173 11.6102 12.9173 9.99935V4.58268Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M3.75 9.58203C3.75 13.0337 6.54833 15.832 10 15.832M10 15.832C13.4517 15.832 16.25 13.0337 16.25 9.58203M10 15.832V18.332"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default VoiceIcon;
