import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ZoomIconSvg = props => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 16V11H1V14.292L4.6 10.692L5.308 11.4L1.708 15H5V16H0ZM11.4 5.308L10.692 4.6L14.292 1H11V0H16V5H15V1.708L11.4 5.308Z"
      fill="#1C1E24"
    />
  </Svg>
);

export default ZoomIconSvg;
