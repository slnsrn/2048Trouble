import React, { createRef, useState } from 'react';

const initialPos = {
  x: 0,
  y: 0,
};
export default function Title({ title }: { title: string }): React.JSX.Element {
  const [position, setPosition] = useState(initialPos);

  const titleRef = createRef<HTMLDivElement>();

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!titleRef.current) return;
    const width = titleRef.current.clientWidth;
    const height = titleRef.current.clientHeight;

    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;

    setPosition({
      x: oX,
      y: oY,
    });
  };

  const onMouseOut = () => {
    setPosition(initialPos);
  };

  const maskStyle = {
    transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
    clipPath: `polygon(0 0, calc(${position.x} * 1% + (${position.y}-50) * .4%) 0, calc(${position.x} * 1% + (${position.y} - 50) * -.4%) 100%, 0 100%)`,
    WebkitClipPath: `polygon(0 0, calc(${position.x} * 1% + (${position.y}-50) * .4%) 0, calc(${position.x} * 1% + (${position.y}-50) * -.4%) 100%, 0 100%)`,
  };

  return (
    <div
      className="cursor-pointer relative text-center text-6xl lg:text-[80px]"
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      ref={titleRef}
    >
      <div className="text-amber-300">
        <h1>{title}</h1>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full text-indigo-400"
        style={maskStyle}
      >
        <h1>{title}</h1>
      </div>
    </div>
  );
}
