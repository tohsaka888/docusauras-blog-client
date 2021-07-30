import React from "react";

type fade = {
  fade: boolean;
  setFade: any;
  height: Number;
  headerHeight: Number
};

type trails = {
  index: number;
};

const fadeContext = React.createContext<fade>({
  fade: false,
  setFade: null,
  height: -1,
  headerHeight: -1
});
const trailContext = React.createContext<trails>({ index: 0 });

export { fadeContext, trailContext };
