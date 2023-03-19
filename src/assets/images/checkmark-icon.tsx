import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const CheckmarkIcon = (props: SvgProps) => (
  <Svg width={27} height={24} fill="none" {...props}>
    <Path
      d="m24 4.5-14 15L3 13"
      stroke="#64CC5B"
      strokeWidth={5}
      strokeLinecap="round"
    />
  </Svg>
);
