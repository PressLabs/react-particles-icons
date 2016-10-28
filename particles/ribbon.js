import React from 'react';

const RibbonIcon = (props) => {
  const computedSize = props.size || '1em';
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
<path d="M16.382 7.332l0.761 1.634c0.060 0.128 0.179 0.218 0.318 0.24l1.736 0.267c0.34 0.052 0.478 0.47 0.238 0.717l-1.283 1.324c-0.094 0.097-0.136 0.232-0.114 0.365l0.299 1.847c0.057 0.35-0.312 0.612-0.621 0.441l-1.514-0.843c-0.127-0.071-0.281-0.071-0.408 0l-1.514 0.843c-0.308 0.172-0.678-0.090-0.621-0.441l0.299-1.847c0.022-0.133-0.021-0.269-0.114-0.365l-1.283-1.324c-0.24-0.248-0.101-0.665 0.238-0.717l1.736-0.267c0.139-0.021 0.259-0.111 0.318-0.24l0.761-1.634c0.152-0.326 0.612-0.326 0.764 0z"/>
<path d="M22.21 30.229c-0.389 0-0.761-0.125-1.077-0.362l-5.133-3.85-5.133 3.85c-0.316 0.237-0.688 0.362-1.077 0.362-0.995 0-1.805-0.809-1.805-1.802v-25.754c0-0.993 0.808-1.801 1.801-1.801h12.427c0.993 0 1.801 0.808 1.801 1.801v25.754c0 0.994-0.809 1.802-1.804 1.802zM15.988 24.217c0.397-0.003 0.775 0.122 1.092 0.36l3.692 2.769c0.594 0.445 1.441 0.022 1.441-0.72l0-23.052c0-0.497-0.403-0.9-0.9-0.9h-10.626c-0.497 0-0.9 0.403-0.9 0.9v23.052c0 0.742 0.847 1.166 1.441 0.72l3.661-2.746c0.318-0.238 0.702-0.381 1.1-0.383z"/>
</g>
    </svg>
  );
}

export default RibbonIcon;
