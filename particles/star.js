import React from 'react';

const StarIcon = (props) => {
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
<path d="M23.26 30.239c-0.416 0-0.834-0.109-1.206-0.315l-5.717-3.161c-0.205-0.113-0.467-0.113-0.672 0l-5.717 3.16c-0.373 0.206-0.79 0.315-1.207 0.315-0.733 0-1.428-0.324-1.908-0.888-0.471-0.554-0.673-1.287-0.555-2.012l1.13-6.927c0.035-0.217-0.035-0.44-0.188-0.597l-4.845-4.966c-0.656-0.672-0.878-1.644-0.58-2.534s1.061-1.533 1.989-1.674l6.559-1.002c0.229-0.035 0.425-0.181 0.524-0.391l2.876-6.128c0.415-0.885 1.281-1.435 2.259-1.435s1.843 0.55 2.259 1.435l2.876 6.128c0.099 0.21 0.294 0.356 0.524 0.391l6.559 1.002c0.929 0.142 1.691 0.784 1.989 1.674s0.076 1.862-0.58 2.534l-4.845 4.966c-0.153 0.157-0.224 0.38-0.188 0.597l1.13 6.927c0.118 0.725-0.084 1.458-0.555 2.012-0.48 0.565-1.175 0.888-1.908 0.889zM16 24.876c0.421 0 0.838 0.108 1.207 0.311l5.717 3.161c0.108 0.060 0.221 0.090 0.335 0.090 0.201 0 0.401-0.095 0.536-0.254 0.092-0.108 0.193-0.293 0.15-0.556l-1.13-6.927c-0.127-0.778 0.126-1.58 0.677-2.144l4.846-4.966c0.267-0.274 0.202-0.584 0.161-0.705s-0.175-0.408-0.553-0.466l-6.559-1.002c-0.824-0.126-1.527-0.652-1.882-1.406l-2.876-6.128c-0.169-0.36-0.496-0.399-0.628-0.399s-0.459 0.039-0.628 0.399l-2.876 6.128c-0.354 0.755-1.058 1.28-1.882 1.406l-6.559 1.002c-0.378 0.058-0.513 0.345-0.554 0.466s-0.106 0.431 0.161 0.705l4.845 4.966c0.551 0.564 0.804 1.366 0.677 2.144l-1.13 6.927c-0.043 0.263 0.058 0.448 0.15 0.556 0.135 0.159 0.336 0.254 0.536 0.254 0.114 0 0.227-0.030 0.335-0.090l5.717-3.161c0.368-0.204 0.786-0.311 1.207-0.311z"/>
</g>
    </svg>
  );
}

export default StarIcon;
