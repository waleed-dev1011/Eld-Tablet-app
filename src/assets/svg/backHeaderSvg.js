import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackHeaderIcon = ({color = 'black', size = 18}) => (
  <Svg width={size * 0.5} height={size} viewBox="0 0 9 18" fill="none">
    <Path
      d="M8.99965 16.438L7.95465 17.5L0.288652 9.71C0.104153 9.5197 0.000976562 9.26505 0.000976562 9C0.000976563 8.73495 0.104153 8.4803 0.288652 8.29L7.95465 0.5L8.99965 1.563L1.68165 9L8.99965 16.438Z"
      fill={color}
    />
  </Svg>
);

export default BackHeaderIcon;
