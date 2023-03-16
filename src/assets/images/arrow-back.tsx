import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const ArrowBackIcon = (props: SvgProps) => (
  <Svg width={26} height={23} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 11.5c0 .436-.171.853-.476 1.162a1.616 1.616 0 0 1-1.149.48H5.55l6.977 7.05a1.647 1.647 0 0 1 .477 1.163 1.661 1.661 0 0 1-.477 1.163 1.625 1.625 0 0 1-1.15.482 1.61 1.61 0 0 1-1.15-.482l-9.75-9.855A1.643 1.643 0 0 1 0 11.5a1.658 1.658 0 0 1 .477-1.163l9.75-9.855a1.618 1.618 0 0 1 2.3 0 1.654 1.654 0 0 1 0 2.326L5.55 9.858h18.825c.431 0 .844.172 1.15.48.304.309.475.726.475 1.162Z"
      fill="#284B63"
    />
  </Svg>
);
