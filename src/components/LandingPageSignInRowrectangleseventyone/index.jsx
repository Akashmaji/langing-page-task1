import React from "react";

import { Line, Text } from "components";

const LandingPageSignInRowrectangleseventyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-blue_gray-100 h-0.5 mb-1.5 sm:mt-0 mt-[9px] w-[37%]" />
        <Text className="text-black-900 text-xs" size="txtPoppinsSemiBold12">
          {props?.text}
        </Text>
        <Line className="bg-blue_gray-100 h-0.5 mb-1.5 sm:mt-0 mt-[9px] w-[37%]" />
      </div>
    </>
  );
};

LandingPageSignInRowrectangleseventyone.defaultProps = {
  text: "Or connect with",
};

export default LandingPageSignInRowrectangleseventyone;
