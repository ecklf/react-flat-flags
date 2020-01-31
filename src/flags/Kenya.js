import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 25"
      size={size}
      {...otherProps}
    >
      <defs>
        <clipPath id="Kenya_svg_prefix__a">
          <path d="M0 0h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__c">
          <path d="M0 6h37v13H0zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__e">
          <path d="M0 7h37v11H0zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__g">
          <path d="M20 5h3v15h-3zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__h">
          <path d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__i">
          <path d="M14 5h3v15h-3zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__j">
          <path d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__k">
          <path d="M18 4h2v8h-2zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__l">
          <path d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__m">
          <path d="M16 4h2v8h-2zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__n">
          <path d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__o">
          <path d="M18 14h2v8h-2zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__p">
          <path d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__q">
          <path d="M16 14h2v8h-2zm0 0" />
        </clipPath>
        <clipPath id="Kenya_svg_prefix__r">
          <path d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#57a763"
      />
      <g clipPath="url(#Kenya_svg_prefix__a)">
        <g clipPath="url(#Kenya_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 0h36.988v12.23H0zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__c)">
        <g clipPath="url(#Kenya_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 6.914h36.988V18.61H0zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__e)">
        <g clipPath="url(#Kenya_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M0 7.977h36.988v9.57H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <path
        d="M18.23 2.125c2.188 0 3.965 4.645 3.965 10.371 0 5.727-1.777 10.367-3.965 10.367-2.187 0-3.964-4.64-3.964-10.367 0-5.726 1.777-10.371 3.964-10.371zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Kenya_svg_prefix__g)">
        <g clipPath="url(#Kenya_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M22.723 5.848c1.457 0 2.64 3.097 2.64 6.914 0 3.816-1.183 6.914-2.64 6.914-1.461 0-2.645-3.098-2.645-6.914 0-3.817 1.184-6.914 2.645-6.914zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__i)">
        <g clipPath="url(#Kenya_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M13.738 5.848c1.461 0 2.645 3.097 2.645 6.914 0 3.816-1.184 6.914-2.645 6.914-1.457 0-2.64-3.098-2.64-6.914 0-3.817 1.183-6.914 2.64-6.914zm0 0"
            fillRule="evenodd"
            fill="#434953"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__k)">
        <g clipPath="url(#Kenya_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M19.023 4.254c.293 0 .528 1.547.528 3.457 0 1.906-.235 3.457-.528 3.457-.293 0-.527-1.55-.527-3.457 0-1.91.234-3.457.527-3.457zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__m)">
        <g clipPath="url(#Kenya_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M17.438 4.254c.292 0 .527 1.547.527 3.457 0 1.906-.235 3.457-.527 3.457-.293 0-.528-1.55-.528-3.457 0-1.91.235-3.457.527-3.457zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__o)">
        <g clipPath="url(#Kenya_svg_prefix__p)" clipRule="evenodd">
          <path
            d="M19.023 14.887c.293 0 .528 1.55.528 3.457 0 1.91-.235 3.457-.528 3.457-.293 0-.527-1.547-.527-3.457 0-1.907.234-3.457.527-3.457zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Kenya_svg_prefix__q)">
        <g clipPath="url(#Kenya_svg_prefix__r)" clipRule="evenodd">
          <path
            d="M17.438 14.887c.292 0 .527 1.55.527 3.457 0 1.91-.235 3.457-.527 3.457-.293 0-.528-1.547-.528-3.457 0-1.907.235-3.457.527-3.457zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <path
        d="M18.23 12.23c.438 0 .793.356.793.797a.794.794 0 01-.793.797.794.794 0 01-.793-.797c0-.441.356-.797.793-.797zm0 0"
        fillRule="evenodd"
        fill="#e5e9ed"
      />
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
