// 字体渐变动画(渐变消失)
import React, { useEffect, ReactNode, useCallback, useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import { fadeContext } from "../context/contexts";

type Props = {
  children?: ReactNode;
};

export default function NormalFade({ children }: Props): JSX.Element {
  const context = useContext(fadeContext);
  const fontStyle = useSpring({
    from: {opacity: 0},
    to: {opacity: context.height === -1 ? 0 : 1}
  });
  
  return <animated.div style={fontStyle}>{children}</animated.div>;
}
