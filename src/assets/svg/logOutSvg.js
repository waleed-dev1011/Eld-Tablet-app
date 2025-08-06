import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LogOutSvg = ({color = '#000', ...props}) => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M14.417 5.539a.6.6 0 0 1 .839.077l2.5 3a.6.6 0 0 1-.084.837.6.6 0 0 1-.845-.068l-2.5-3a.6.6 0 0 1 .09-.846Z"
        fill={color}
      />
      <Path
        d="M14.417 12.461a.6.6 0 0 1-.09-.846l2.5-3a.6.6 0 0 1 .93.76l-2.5 3a.6.6 0 0 1-.84.086Z"
        fill={color}
      />
      <Path
        d="M17 9a.6.6 0 0 1-.6.6H7.4a.6.6 0 0 1 0-1.2h9c.331 0 .6.269.6.6Z"
        fill={color}
      />
      <Path
        d="M0.2 0.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H0.8a.6.6 0 0 1-.6-.6ZM0.2 17.4a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H0.8a.6.6 0 0 1-.6-.6Z"
        fill={color}
      />
      <Path
        d="M11.6 0a.6.6 0 0 1 .6.6V5.4a.6.6 0 1 1-1.2 0V0.6a.6.6 0 0 1 .6-.6ZM11.6 12a.6.6 0 0 1 .6.6v4.8a.6.6 0 1 1-1.2 0v-4.8a.6.6 0 0 1 .6-.6ZM0.8 0a.6.6 0 0 1 .6.6v16.8a.6.6 0 1 1-1.2 0V0.6A.6.6 0 0 1 0.8 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default LogOutSvg;
