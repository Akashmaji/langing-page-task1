import React from "react";

import { Line, Text } from "components";
import { Button } from "react-bootstrap";

const LandingPageSignInSigninjoinin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[42%]">
        <Button >{props.signintext}</Button>
          <Line className="bg-deep_purple-400 h-0.5 w-full" />
        </div>
        <div className="flex flex-col items-center justify-start">

      <Button >{props.joinintext}</Button>
        </div>
      </div>
      <div>
      
    </div>
    </>
  );
};

LandingPageSignInSigninjoinin.defaultProps = {
  signintext: "SignIn",
  joinintext: "JoinIn",
};

export default LandingPageSignInSigninjoinin;
