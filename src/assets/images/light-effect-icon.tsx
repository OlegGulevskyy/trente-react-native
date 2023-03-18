import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const LightEffectIcon = (props: SvgProps) => (
  <Svg height={33} fill="none" {...props}>
    <Path
      d="m22.378 0 8.207 14.25H14.172L22.378 0Z"
      fill="#B68F40"
      fillOpacity={0.45}
    />
    <Path
      d="M22.378 0 40.95 24.75H3.807L22.379 0Z"
      fill="#B68F40"
      fillOpacity={0.28}
    />
    <Path fill="#9B9B9B" d="M19.885 0h4.987v3h-4.987z" />
  </Svg>
);
