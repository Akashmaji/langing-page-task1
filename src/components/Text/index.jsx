import React from "react";

const sizeClasses = {
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsLight12: "font-light font-poppins",
  txtPoppinsSemiBold14Black90001: "font-poppins font-semibold",
  txtPoppinsLight18: "font-light font-poppins",
  txtPoppinsRegular14Black90001: "font-normal font-poppins",
  txtPoppinsSemiBold24Black90001: "font-poppins font-semibold",
  txtPoppinsMediumItalic36: "font-medium font-poppins italic",
  txtPoppinsLight18Gray600: "font-light font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular12Black900: "font-normal font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsSemiBold20Gray500: "font-poppins font-semibold",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsLight18Black90001: "font-light font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular12Gray500: "font-normal font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold36Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium14Black90001: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
