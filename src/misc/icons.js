import React from 'react';

function extractIconConfig(props) {
  const defaultSize = '20px';
  const defaultColor = '#000000';

  return {
    size: props.size || defaultSize,
    color: props.color || defaultColor,
  };
}

const Heart = (props) => {
  const { size, color } = extractIconConfig(props);

  return (
    <svg width={size} height={size} viewBox="-1 -1 21 19">
      <path d="M18.2842712,9.84452689 C20.5719096,7.59245518 20.5719096,3.9411255 18.2842712,1.68905378 C15.9966329,-0.563017928 12.2876383,-0.563017928 10,1.68905378 C7.71236166,-0.563017928 4.00336709,-0.563017928 1.71572875,1.68905378 C-0.571909584,3.9411255 -0.571909584,7.59245518 1.71572875,9.84452689 L10,18 L18.2842712,9.84452689 L18.2842712,9.84452689 Z" id="shape" stroke="none" fill={color} fillRule="evenodd" />
    </svg>
  );
};

export { Heart };
