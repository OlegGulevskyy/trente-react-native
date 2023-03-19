// icon:window-close | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const CloseIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <Path d="M13.46 12L19 17.54V19h-1.46L12 13.46 6.46 19H5v-1.46L10.54 12 5 6.46V5h1.46L12 10.54 17.54 5H19v1.46L13.46 12z" />
    </Svg>
  );
};
