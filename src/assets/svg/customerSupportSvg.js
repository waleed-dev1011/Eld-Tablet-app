import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CustomerSupportSvg = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.4 13.5H10.75C14.202 13.5 17 10.702 17 7.25C17 3.798 14.202 1 10.75 1H7.25C3.798 1 1 3.798 1 7.25C1 11.28 3.298 13.69 5.715 15.143C6.928 15.872 8.15 16.343 9.0735 16.6315C9.18717 16.6672 9.296 16.7 9.4 16.73V13.5ZM10.4 18C10.4 18 10.018 17.9355 9.4 17.7685C6.795 17.0625 0 14.525 0 7.25C0 3.246 3.246 0 7.25 0H10.75C14.754 0 18 3.246 18 7.25C18 11.254 14.754 14.5 10.75 14.5H10.4V18Z"
      fill="#1C1E24"
    />
  </Svg>
);

export default CustomerSupportSvg;
