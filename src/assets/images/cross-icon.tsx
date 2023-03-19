import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const CrossIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m18 18-6-6m0 0-6 6m6-6L6 6m6 6 6-6"
      stroke="#E03131"
      strokeWidth={5}
      strokeLinecap="round"
    />
  </Svg>
);
