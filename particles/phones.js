import React from 'react';

const PhonesIcon = (props) => {
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
<path d="M30.228 22.692c0-0.798-0.247-1.538-0.668-2.148-0.084-0.122-0.132-0.266-0.132-0.414v-3.357c0-7.27-5.947-13.334-13.217-13.338-7.295-0.004-13.23 5.93-13.23 13.224v2.962c0 0.179-0.065 0.353-0.187 0.484-0.633 0.677-1.021 1.587-1.021 2.587 0 1.471 0.838 2.745 2.061 3.374 0.18 0.093 0.311 0.256 0.368 0.45 0.344 1.183 1.436 2.048 2.73 2.048v0c1.571 0 2.844-1.273 2.844-2.844v-5.688c0-1.571-1.273-2.844-2.844-2.844v0c-0.404 0-0.789 0.085-1.137 0.237-0.478 0.209-1.013-0.136-1.013-0.657v0c0-6.314 5.076-11.516 11.39-11.533s11.455 5.113 11.455 11.423v0.322c0 0.562-0.613 0.904-1.095 0.614-0.427-0.257-0.928-0.405-1.464-0.405v0c-1.571 0-2.844 1.273-2.844 2.844v5.688c0 1.571 1.273 2.844 2.844 2.844v0c1.294 0 2.386-0.865 2.73-2.048 0.057-0.194 0.188-0.358 0.368-0.45 1.224-0.629 2.061-1.903 2.061-3.374z"/>
</g>
    </svg>
  );
}

export default PhonesIcon;
