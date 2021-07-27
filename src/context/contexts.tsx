import React from 'react'

type fade = {
  fade: boolean;
  setFade: any;
  height: Number;
}

const fadeContext = React.createContext<fade>({fade: false, setFade: null, height: 0});

export {fadeContext}