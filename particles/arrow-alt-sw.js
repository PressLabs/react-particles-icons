import React from 'react'

const ArrowAltSwIcon = (props) => {
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
<title>arrow-alt-sw</title>
<path d="M26.415 25.283c-0.009-0.495-0.433-0.881-0.928-0.881l-16.145 0c-0.246 0-0.37-0.298-0.195-0.472l16.782-16.782c0.342-0.342 0.373-0.899 0.048-1.257-0.348-0.382-0.939-0.392-1.3-0.031l-16.824 16.824c-0.174 0.174-0.472 0.051-0.472-0.195v-16.199c-0-0.496-0.402-0.898-0.898-0.898s-0.898 0.402-0.898 0.898v19.010c-0 0.238 0.095 0.467 0.263 0.635s0.397 0.263 0.635 0.263l19.035-0c0.502 0 0.907-0.411 0.898-0.915z"/>
</g>
    </svg>
  )
}

export default ArrowAltSwIcon

