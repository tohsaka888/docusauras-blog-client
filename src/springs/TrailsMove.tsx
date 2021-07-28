import React, { ReactElement, ReactNode } from "react";
import { useTrail, animated, config } from "react-spring";
import { trailContext } from "../context/contexts";

type Props = {
  children: ReactElement;
  amount: number;
  isShow: boolean;
};

export default function TrailsMove({
  children,
  amount,
  isShow,
}: Props): JSX.Element {
  const trail = useTrail(amount, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: isShow
      ? { opacity: 1, transform: "translate3d(0,0,0)" }
      : { opacity: 0, transform: "translate3d(100%,0,0)" },
    config: config.gentle,
  });
  return (
    <div>
      {trail.map((style, index) => (
        <animated.div style={style} key={index}>
          {React.cloneElement(children,{index: index})} + {index}
        </animated.div>
      ))}
    </div>
  );
}
