import React from 'react'

const ArrowsCircumflexIcon = (props) => {
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
<path d="M8.898 18.837c-0-0.198 0.081-0.395 0.241-0.537l6.384-5.674c0.272-0.242 0.682-0.242 0.954 0l6.384 5.674c0.297 0.264 0.323 0.718 0.060 1.014s-0.718 0.323-1.014 0.060l-5.613-4.989c-0.167-0.149-0.42-0.149-0.587 0l-5.613 4.989c-0.296 0.264-0.75 0.237-1.014-0.060-0.122-0.137-0.181-0.307-0.181-0.477z"/>
</g>
    </svg>
  )
}

export default ArrowsCircumflexIcon

