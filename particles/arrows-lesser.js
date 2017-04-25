import React from 'react'

const ArrowsLesserIcon = (props) => {
  const computedSize = props.size || '1em'
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      viewBox="0 0 32 32"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >
      <g>
<title>arrows-lesser</title>
<path d="M18.837 23.102c-0.198 0-0.395-0.081-0.537-0.241l-5.674-6.384c-0.242-0.272-0.242-0.682 0-0.954l5.674-6.384c0.264-0.297 0.718-0.323 1.014-0.060s0.323 0.718 0.060 1.014l-4.989 5.613c-0.149 0.167-0.149 0.42 0 0.587l4.989 5.613c0.264 0.296 0.237 0.75-0.060 1.014-0.137 0.122-0.307 0.181-0.477 0.181z"/>
</g>
    </svg>
  )
}

export default ArrowsLesserIcon

