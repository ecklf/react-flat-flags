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
        <clipPath id="Belarus_svg_prefix__J">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__a">
          <path d="M0 18h37v7H0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__c">
          <path d="M0 0h8v25H0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__d">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__e">
          <path d="M1 22h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__f">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__g">
          <path d="M1 20h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__h">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__i">
          <path d="M1 18h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__j">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__k">
          <path d="M1 16h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__l">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__m">
          <path d="M1 14h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__n">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__o">
          <path d="M1 12h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__p">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__q">
          <path d="M1 10h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__r">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__s">
          <path d="M1 7h2v3H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__t">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__u">
          <path d="M1 5h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__v">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__w">
          <path d="M1 3h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__x">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__y">
          <path d="M1 1h2v2H1zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__z">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__A">
          <path d="M5 22h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__B">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__C">
          <path d="M5 20h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__D">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__E">
          <path d="M5 18h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__F">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__G">
          <path d="M5 16h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__H">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__I">
          <path d="M5 14h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__b">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__K">
          <path d="M5 12h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__L">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__M">
          <path d="M5 10h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__N">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__O">
          <path d="M5 7h2v3H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__P">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__Q">
          <path d="M5 5h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__R">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__S">
          <path d="M5 3h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__T">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__U">
          <path d="M5 1h2v2H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__V">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__W">
          <path d="M5 0h2v1H5zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__X">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__Y">
          <path d="M2 2h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__Z">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__aa">
          <path d="M2 0h3v2H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ab">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ac">
          <path d="M2 4h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ad">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ae">
          <path d="M2 7h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__af">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ag">
          <path d="M2 10h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ah">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ai">
          <path d="M2 12h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__aj">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ak">
          <path d="M2 15h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__al">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__am">
          <path d="M2 18h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__an">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ao">
          <path d="M2 20h3v3H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ap">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__aq">
          <path d="M2 23h3v2H2zm0 0" />
        </clipPath>
        <clipPath id="Belarus_svg_prefix__ar">
          <path d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0" />
        </clipPath>
      </defs>
      <path
        d="M3.363 0h30.262c1.86 0 3.363 1.527 3.363 3.406v18.176c0 1.883-1.504 3.41-3.363 3.41H3.363c-1.86 0-3.363-1.527-3.363-3.41V3.406C0 1.527 1.504 0 3.363 0zm0 0"
        fillRule="evenodd"
        fill="#ed5565"
      />
      <g clipPath="url(#Belarus_svg_prefix__a)">
        <g clipPath="url(#Belarus_svg_prefix__b)" clipRule="evenodd">
          <path
            d="M0 18.61h36.988v6.382H0zm0 0"
            fillRule="evenodd"
            fill="#57a763"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__c)">
        <g clipPath="url(#Belarus_svg_prefix__d)" clipRule="evenodd">
          <path
            d="M0 0h7.398v24.992H0zm0 0"
            fillRule="evenodd"
            fill="#ed5565"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__e)">
        <g clipPath="url(#Belarus_svg_prefix__f)" clipRule="evenodd">
          <path
            d="M1.059 22.863h1.054v1.067H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__g)">
        <g clipPath="url(#Belarus_svg_prefix__h)" clipRule="evenodd">
          <path
            d="M1.059 20.738h1.054v1.063H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__i)">
        <g clipPath="url(#Belarus_svg_prefix__j)" clipRule="evenodd">
          <path
            d="M1.059 18.61h1.054v1.066H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__k)">
        <g clipPath="url(#Belarus_svg_prefix__l)" clipRule="evenodd">
          <path
            d="M1.059 16.484h1.054v1.063H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__m)">
        <g clipPath="url(#Belarus_svg_prefix__n)" clipRule="evenodd">
          <path
            d="M1.059 14.355h1.054v1.067H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__o)">
        <g clipPath="url(#Belarus_svg_prefix__p)" clipRule="evenodd">
          <path
            d="M1.059 12.23h1.054v1.063H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__q)">
        <g clipPath="url(#Belarus_svg_prefix__r)" clipRule="evenodd">
          <path
            d="M1.059 10.102h1.054v1.066H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__s)">
        <g clipPath="url(#Belarus_svg_prefix__t)" clipRule="evenodd">
          <path
            d="M1.059 7.977h1.054v1.062H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__u)">
        <g clipPath="url(#Belarus_svg_prefix__v)" clipRule="evenodd">
          <path
            d="M1.059 5.848h1.054v1.066H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__w)">
        <g clipPath="url(#Belarus_svg_prefix__x)" clipRule="evenodd">
          <path
            d="M1.059 3.723h1.054v1.062H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__y)">
        <g clipPath="url(#Belarus_svg_prefix__z)" clipRule="evenodd">
          <path
            d="M1.059 1.594h1.054V2.66H1.06zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__A)">
        <g clipPath="url(#Belarus_svg_prefix__B)" clipRule="evenodd">
          <path
            d="M5.285 22.863H6.34v1.067H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__C)">
        <g clipPath="url(#Belarus_svg_prefix__D)" clipRule="evenodd">
          <path
            d="M5.285 20.738H6.34v1.063H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__E)">
        <g clipPath="url(#Belarus_svg_prefix__F)" clipRule="evenodd">
          <path
            d="M5.285 18.61H6.34v1.066H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__G)">
        <g clipPath="url(#Belarus_svg_prefix__H)" clipRule="evenodd">
          <path
            d="M5.285 16.484H6.34v1.063H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__I)">
        <g clipPath="url(#Belarus_svg_prefix__J)" clipRule="evenodd">
          <path
            d="M5.285 14.355H6.34v1.067H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__K)">
        <g clipPath="url(#Belarus_svg_prefix__L)" clipRule="evenodd">
          <path
            d="M5.285 12.23H6.34v1.063H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__M)">
        <g clipPath="url(#Belarus_svg_prefix__N)" clipRule="evenodd">
          <path
            d="M5.285 10.102H6.34v1.066H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__O)">
        <g clipPath="url(#Belarus_svg_prefix__P)" clipRule="evenodd">
          <path
            d="M5.285 7.977H6.34v1.062H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__Q)">
        <g clipPath="url(#Belarus_svg_prefix__R)" clipRule="evenodd">
          <path
            d="M5.285 5.848H6.34v1.066H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__S)">
        <g clipPath="url(#Belarus_svg_prefix__T)" clipRule="evenodd">
          <path
            d="M5.285 3.723H6.34v1.062H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__U)">
        <g clipPath="url(#Belarus_svg_prefix__V)" clipRule="evenodd">
          <path
            d="M5.285 1.594H6.34V2.66H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__W)">
        <g clipPath="url(#Belarus_svg_prefix__X)" clipRule="evenodd">
          <path
            d="M5.285-.531H6.34V.53H5.285zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__Y)">
        <g clipPath="url(#Belarus_svg_prefix__Z)" clipRule="evenodd">
          <path
            d="M2.64 2.125h2.114v2.129H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__aa)">
        <g clipPath="url(#Belarus_svg_prefix__ab)" clipRule="evenodd">
          <path
            d="M2.64-.531h2.114v2.125H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__ac)">
        <g clipPath="url(#Belarus_svg_prefix__ad)" clipRule="evenodd">
          <path
            d="M2.64 4.785h2.114v2.13H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__ae)">
        <g clipPath="url(#Belarus_svg_prefix__af)" clipRule="evenodd">
          <path
            d="M2.64 7.445h2.114V9.57H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__ag)">
        <g clipPath="url(#Belarus_svg_prefix__ah)" clipRule="evenodd">
          <path
            d="M2.64 10.102h2.114v2.128H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__ai)">
        <g clipPath="url(#Belarus_svg_prefix__aj)" clipRule="evenodd">
          <path
            d="M2.64 12.762h2.114v2.125H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__ak)">
        <g clipPath="url(#Belarus_svg_prefix__al)" clipRule="evenodd">
          <path
            d="M2.64 15.422h2.114v2.125H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__am)">
        <g clipPath="url(#Belarus_svg_prefix__an)" clipRule="evenodd">
          <path
            d="M2.64 18.078h2.114v2.129H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__ao)">
        <g clipPath="url(#Belarus_svg_prefix__ap)" clipRule="evenodd">
          <path
            d="M2.64 20.738h2.114v2.125H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
      <g clipPath="url(#Belarus_svg_prefix__aq)">
        <g clipPath="url(#Belarus_svg_prefix__ar)" clipRule="evenodd">
          <path
            d="M2.64 23.395h2.114v2.128H2.64zm0 0"
            fillRule="evenodd"
            fill="#f5f7f9"
          />
        </g>
      </g>
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
