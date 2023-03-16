import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const SearchIcon = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      d="M12.476 10.99A6.908 6.908 0 0 0 6.64.005a6.906 6.906 0 0 0-4.974 11.401 6.906 6.906 0 0 0 9.326 1.07c.032.042.065.082.103.121l4.09 4.091a1.063 1.063 0 1 0 1.504-1.502l-4.09-4.091a1.045 1.045 0 0 0-.123-.105Zm.274-4.085a5.846 5.846 0 0 1-5.843 5.844 5.843 5.843 0 0 1-4.132-9.977 5.843 5.843 0 0 1 9.976 4.133Z"
      fill="#284B63"
    />
  </Svg>
);
