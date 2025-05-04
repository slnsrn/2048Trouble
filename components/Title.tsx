'use client'

import React, { useRef, useState } from 'react'

const initialPos = {
  x: 0,
  y: 0,
}
export default function Title({ title }: { title: string }): React.JSX.Element {
  const [position, setPosition] = useState(initialPos)

  const titleRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!titleRef.current) return
    const width = titleRef.current.clientWidth
    const height = titleRef.current.clientHeight

    const oX = (e.nativeEvent.offsetX / width) * 100
    const oY = (e.nativeEvent.offsetY / height) * 100

    setPosition({
      x: oX,
      y: oY,
    })
  }

  const onMouseOut = () => {
    setPosition(initialPos)
  }

  const topRightX = position.x + (position.y - 50) * 0.5
  const bottomRightX = position.x + (position.y - 50) * -1

  const maskStyle = {
    transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
    clipPath: `polygon(0 0, ${topRightX}% 0, ${bottomRightX}% 100%, 0 100%)`,
    WebkitClipPath: `polygon(0 0, ${topRightX}% 0, ${bottomRightX}% 100%, 0 100%)`,
  }

  return (
    <div
      className="cursor-pointer relative text-3xl md:text-6xl"
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      ref={titleRef}
    >
      <div className="text-secondary">
        <h1>{title}</h1>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full text-accent"
        style={maskStyle}
      >
        <h1>{title}</h1>
      </div>
    </div>
  )
}
