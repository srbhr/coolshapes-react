import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Polygon6: ShapeType = forwardRef((props, ref) => {
  const shapeId = "polygon-6";
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        width="200"
        height="190"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M100 0l100 72.573L161.803 190H38.197L0 72.573 100 0z"></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M200-5H0v200h200V-5z"></path>
        <path
          fill="url(#paint0_linear_748_4365)"
          fillOpacity="0.55"
          d="M200-5H0v200h200V-5z"></path>
        <g filter="url(#filter0_f_748_4365)">
          <path fill="#00F0FF" d="M158 108H11v90h147v-90z"></path>
          <path fill="#18A0FB" d="M123 67H-20v108h143V67z"></path>
          <ellipse
            cx="62.382"
            cy="64.794"
            fill="#FFD749"
            rx="60.387"
            ry="39.91"
            transform="rotate(-33.875 62.382 64.794)"></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4365"
          width="298"
          height="300.438"
          x="-80"
          y="-42.438"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4365"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4365"
          x1="200"
          x2="0"
          y1="-5"
          y2="195"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FFD600"></stop>
        </linearGradient>
      </defs>
    </ShapeBase>
  );
});

Polygon6.displayName = "Polygon6";
export { Polygon6 };
