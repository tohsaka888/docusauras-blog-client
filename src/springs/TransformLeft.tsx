import React, { ReactNode } from "react";
import { useSpring, animated, config } from "react-spring";

type Props = {
  children: ReactNode;
  isShow?: boolean;
};

export default function TransformLeft({
  children,
  isShow = false,
}: Props): JSX.Element {
  const transition = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: isShow
      ? { opacity: 1, transform: "translate3d(0,0,0)" }
      : { opacity: 0, transform: "translate3d(100%,0,0)" },
    delay: 500,
    config: config.gentle,
  });
  return <animated.div style={transition}>{children}</animated.div>;
}
