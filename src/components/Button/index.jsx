import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg", circle: "rounded-[50%]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-deep_purple-400",
    deep_purple_400: "bg-deep_purple-400 text-white-A700",
    blue_gray_50: "bg-blue_gray-50",
  },
  outline: { black_900: "border border-black-900 border-solid text-black-900" },
};
const sizes = { xs: "p-1", sm: "p-[9px]", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "deep_purple_400",
    "blue_gray_50",
    "black_900",
  ]),
};

export { Button };
