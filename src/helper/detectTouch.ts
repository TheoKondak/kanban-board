const detectTouch = () => window.matchMedia('(pointer: coarse)').matches;

export default detectTouch;
