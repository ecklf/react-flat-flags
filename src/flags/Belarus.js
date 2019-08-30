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
        <clipPath id="Belarus_svg_clip1">
          <path d="M 0 18 L 37 18 L 37 25 L 0 25 Z M 0 18 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip2">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip3">
          <path d="M 0 0 L 8 0 L 8 25 L 0 25 Z M 0 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip4">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip5">
          <path d="M 1 22 L 3 22 L 3 24 L 1 24 Z M 1 22 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip6">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip7">
          <path d="M 1 20 L 3 20 L 3 22 L 1 22 Z M 1 20 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip8">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip9">
          <path d="M 1 18 L 3 18 L 3 20 L 1 20 Z M 1 18 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip10">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip11">
          <path d="M 1 16 L 3 16 L 3 18 L 1 18 Z M 1 16 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip12">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip13">
          <path d="M 1 14 L 3 14 L 3 16 L 1 16 Z M 1 14 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip14">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip15">
          <path d="M 1 12 L 3 12 L 3 14 L 1 14 Z M 1 12 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip16">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip17">
          <path d="M 1 10 L 3 10 L 3 12 L 1 12 Z M 1 10 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip18">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip19">
          <path d="M 1 7 L 3 7 L 3 10 L 1 10 Z M 1 7 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip20">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip21">
          <path d="M 1 5 L 3 5 L 3 7 L 1 7 Z M 1 5 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip22">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip23">
          <path d="M 1 3 L 3 3 L 3 5 L 1 5 Z M 1 3 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip24">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip25">
          <path d="M 1 1 L 3 1 L 3 3 L 1 3 Z M 1 1 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip26">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip27">
          <path d="M 5 22 L 7 22 L 7 24 L 5 24 Z M 5 22 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip28">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip29">
          <path d="M 5 20 L 7 20 L 7 22 L 5 22 Z M 5 20 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip30">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip31">
          <path d="M 5 18 L 7 18 L 7 20 L 5 20 Z M 5 18 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip32">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip33">
          <path d="M 5 16 L 7 16 L 7 18 L 5 18 Z M 5 16 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip34">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip35">
          <path d="M 5 14 L 7 14 L 7 16 L 5 16 Z M 5 14 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip36">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip37">
          <path d="M 5 12 L 7 12 L 7 14 L 5 14 Z M 5 12 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip38">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip39">
          <path d="M 5 10 L 7 10 L 7 12 L 5 12 Z M 5 10 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip40">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip41">
          <path d="M 5 7 L 7 7 L 7 10 L 5 10 Z M 5 7 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip42">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip43">
          <path d="M 5 5 L 7 5 L 7 7 L 5 7 Z M 5 5 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip44">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip45">
          <path d="M 5 3 L 7 3 L 7 5 L 5 5 Z M 5 3 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip46">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip47">
          <path d="M 5 1 L 7 1 L 7 3 L 5 3 Z M 5 1 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip48">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip49">
          <path d="M 5 0 L 7 0 L 7 1 L 5 1 Z M 5 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip50">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip51">
          <path d="M 2 2 L 5 2 L 5 5 L 2 5 Z M 2 2 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip52">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip53">
          <path d="M 2 0 L 5 0 L 5 2 L 2 2 Z M 2 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip54">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip55">
          <path d="M 2 4 L 5 4 L 5 7 L 2 7 Z M 2 4 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip56">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip57">
          <path d="M 2 7 L 5 7 L 5 10 L 2 10 Z M 2 7 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip58">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip59">
          <path d="M 2 10 L 5 10 L 5 13 L 2 13 Z M 2 10 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip60">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip61">
          <path d="M 2 12 L 5 12 L 5 15 L 2 15 Z M 2 12 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip62">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip63">
          <path d="M 2 15 L 5 15 L 5 18 L 2 18 Z M 2 15 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip64">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip65">
          <path d="M 2 18 L 5 18 L 5 21 L 2 21 Z M 2 18 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip66">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip67">
          <path d="M 2 20 L 5 20 L 5 23 L 2 23 Z M 2 20 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip68">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip69">
          <path d="M 2 23 L 5 23 L 5 25 L 2 25 Z M 2 23 " />
        </clipPath>
        <clipPath id="Belarus_svg_clip70">
          <path d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 " />
        </clipPath>
      </defs>
      <g id="Belarus_svg_surface1">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "rgb(92.941176%,33.333333%,39.607843%)",
            fillOpacity: 1,
          }}
          d="M 3.363281 0 L 33.625 0 C 35.484375 0 36.988281 1.527344 36.988281 3.40625 L 36.988281 21.582031 C 36.988281 23.464844 35.484375 24.992188 33.625 24.992188 L 3.363281 24.992188 C 1.503906 24.992188 0 23.464844 0 21.582031 L 0 3.40625 C 0 1.527344 1.503906 0 3.363281 0 Z M 3.363281 0 "
        />
        <g clipPath="url(#Belarus_svg_clip1)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip2)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(34.117647%,65.490196%,38.823529%)",
                fillOpacity: 1,
              }}
              d="M 0 18.609375 L 36.988281 18.609375 L 36.988281 24.992188 L 0 24.992188 Z M 0 18.609375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip3)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip4)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(92.941176%,33.333333%,39.607843%)",
                fillOpacity: 1,
              }}
              d="M 0 0 L 7.398438 0 L 7.398438 24.992188 L 0 24.992188 Z M 0 0 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip5)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip6)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 22.863281 L 2.113281 22.863281 L 2.113281 23.929688 L 1.058594 23.929688 Z M 1.058594 22.863281 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip7)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip8)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 20.738281 L 2.113281 20.738281 L 2.113281 21.800781 L 1.058594 21.800781 Z M 1.058594 20.738281 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip9)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip10)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 18.609375 L 2.113281 18.609375 L 2.113281 19.675781 L 1.058594 19.675781 Z M 1.058594 18.609375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip11)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip12)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 16.484375 L 2.113281 16.484375 L 2.113281 17.546875 L 1.058594 17.546875 Z M 1.058594 16.484375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip13)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip14)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 14.355469 L 2.113281 14.355469 L 2.113281 15.421875 L 1.058594 15.421875 Z M 1.058594 14.355469 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip15)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip16)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 12.230469 L 2.113281 12.230469 L 2.113281 13.292969 L 1.058594 13.292969 Z M 1.058594 12.230469 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip17)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip18)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 10.101562 L 2.113281 10.101562 L 2.113281 11.167969 L 1.058594 11.167969 Z M 1.058594 10.101562 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip19)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip20)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 7.976562 L 2.113281 7.976562 L 2.113281 9.039062 L 1.058594 9.039062 Z M 1.058594 7.976562 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip21)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip22)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 5.847656 L 2.113281 5.847656 L 2.113281 6.914062 L 1.058594 6.914062 Z M 1.058594 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip23)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip24)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 3.722656 L 2.113281 3.722656 L 2.113281 4.785156 L 1.058594 4.785156 Z M 1.058594 3.722656 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip25)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip26)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 1.058594 1.59375 L 2.113281 1.59375 L 2.113281 2.660156 L 1.058594 2.660156 Z M 1.058594 1.59375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip27)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip28)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 22.863281 L 6.339844 22.863281 L 6.339844 23.929688 L 5.285156 23.929688 Z M 5.285156 22.863281 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip29)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip30)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 20.738281 L 6.339844 20.738281 L 6.339844 21.800781 L 5.285156 21.800781 Z M 5.285156 20.738281 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip31)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip32)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 18.609375 L 6.339844 18.609375 L 6.339844 19.675781 L 5.285156 19.675781 Z M 5.285156 18.609375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip33)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip34)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 16.484375 L 6.339844 16.484375 L 6.339844 17.546875 L 5.285156 17.546875 Z M 5.285156 16.484375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip35)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip36)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 14.355469 L 6.339844 14.355469 L 6.339844 15.421875 L 5.285156 15.421875 Z M 5.285156 14.355469 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip37)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip38)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 12.230469 L 6.339844 12.230469 L 6.339844 13.292969 L 5.285156 13.292969 Z M 5.285156 12.230469 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip39)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip40)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 10.101562 L 6.339844 10.101562 L 6.339844 11.167969 L 5.285156 11.167969 Z M 5.285156 10.101562 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip41)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip42)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 7.976562 L 6.339844 7.976562 L 6.339844 9.039062 L 5.285156 9.039062 Z M 5.285156 7.976562 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip43)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip44)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 5.847656 L 6.339844 5.847656 L 6.339844 6.914062 L 5.285156 6.914062 Z M 5.285156 5.847656 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip45)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip46)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 3.722656 L 6.339844 3.722656 L 6.339844 4.785156 L 5.285156 4.785156 Z M 5.285156 3.722656 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip47)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip48)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 1.59375 L 6.339844 1.59375 L 6.339844 2.660156 L 5.285156 2.660156 Z M 5.285156 1.59375 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip49)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip50)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 5.285156 -0.53125 L 6.339844 -0.53125 L 6.339844 0.53125 L 5.285156 0.53125 Z M 5.285156 -0.53125 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip51)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip52)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 2.125 L 4.753906 2.125 L 4.753906 4.253906 L 2.640625 4.253906 Z M 2.640625 2.125 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip53)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip54)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 -0.53125 L 4.753906 -0.53125 L 4.753906 1.59375 L 2.640625 1.59375 Z M 2.640625 -0.53125 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip55)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip56)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 4.785156 L 4.753906 4.785156 L 4.753906 6.914062 L 2.640625 6.914062 Z M 2.640625 4.785156 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip57)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip58)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 7.445312 L 4.753906 7.445312 L 4.753906 9.570312 L 2.640625 9.570312 Z M 2.640625 7.445312 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip59)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip60)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 10.101562 L 4.753906 10.101562 L 4.753906 12.230469 L 2.640625 12.230469 Z M 2.640625 10.101562 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip61)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip62)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 12.761719 L 4.753906 12.761719 L 4.753906 14.886719 L 2.640625 14.886719 Z M 2.640625 12.761719 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip63)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip64)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 15.421875 L 4.753906 15.421875 L 4.753906 17.546875 L 2.640625 17.546875 Z M 2.640625 15.421875 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip65)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip66)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 18.078125 L 4.753906 18.078125 L 4.753906 20.207031 L 2.640625 20.207031 Z M 2.640625 18.078125 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip67)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip68)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 20.738281 L 4.753906 20.738281 L 4.753906 22.863281 L 2.640625 22.863281 Z M 2.640625 20.738281 "
            />
          </g>
        </g>
        <g clipPath="url(#Belarus_svg_clip69)" clipRule="nonzero">
          <g clipPath="url(#Belarus_svg_clip70)" clipRule="evenodd">
            <path
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "rgb(96.078431%,96.862745%,97.647059%)",
                fillOpacity: 1,
              }}
              d="M 2.640625 23.394531 L 4.753906 23.394531 L 4.753906 25.523438 L 2.640625 25.523438 Z M 2.640625 23.394531 "
            />
          </g>
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
