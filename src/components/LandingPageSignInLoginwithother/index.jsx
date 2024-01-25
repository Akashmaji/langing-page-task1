import React from "react";

import { Img, Text } from "components";

const LandingPageSignInLoginwithother = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-4 items-center justify-start w-4">
          <div className="flex flex-col h-4 items-center justify-start w-4">
            <Img className="h-4 w-4" src="images/img_google.svg" alt="google" />
          </div>
        </div>
        <Text
          className="text-black-900_01 text-sm w-auto"
          size="txtPoppinsSemiBold14Black90001"
        >
          {props?.continuetext}
        </Text>
      </div>
    </>
  );
};

LandingPageSignInLoginwithother.defaultProps = {
  continuetext: "Continue with Google",
};

export default LandingPageSignInLoginwithother;
