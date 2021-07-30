import React, { ReactNode } from "react";
import { useSpring, animated, config } from "react-spring";

type Props = {
  children: ReactNode;
  isZoom: boolean;
};

export default function Zoom({ children, isZoom }: Props): JSX.Element {
  const styles = useSpring({
    from: {
      zoom: 1,
    },
    to: { zoom: isZoom ? 1.04 : 1 },
    config: config.stiff
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
