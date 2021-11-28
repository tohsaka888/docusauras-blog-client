import React from "react";

type fade = {
  fade: boolean;
  setFade: any;
  isShowCard: boolean;
  isShowHeader: boolean;
  isShowIntro: boolean;
};

type trails = {
  index: number;
};

const fadeContext = React.createContext<fade>({
  fade: false,
  setFade: null,
  isShowHeader: true,
  isShowCard: true,
  isShowIntro: true,
});
const trailContext = React.createContext<trails>({ index: 0 });

export { fadeContext, trailContext };
