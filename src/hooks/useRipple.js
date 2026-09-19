import { useRef, useState } from "react";

export default function useRipple() {
  const ref = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);

  const handlePointerMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Support touch and pointer coords
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setCoords({ x, y });
  };

  const handlePointerDown = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setCoords({ x, y });
    setIsPressed(true);
    setRippleActive(false);
    
    // Quick microtimeout to restart CSS animations
    setTimeout(() => {
      setRippleActive(true);
    }, 10);
  };

  const handlePointerUp = () => {
    setIsPressed(false);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const style = {
    "--ripple-x": `${coords.x}px`,
    "--ripple-y": `${coords.y}px`,
  };

  return {
    ref,
    style,
    bind: {
      onPointerMove: handlePointerMove,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerLeave,
      onPointerEnter: handlePointerEnter,
    },
    isHovered,
    isPressed,
    rippleActive,
    setRippleActive
  };
}
