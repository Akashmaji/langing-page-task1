import React from "react";

import { Button, Img, Text } from "components";

const LandingPageSignInColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
          <div className="flex flex-row gap-6 items-start justify-start w-1/5 md:w-full">
            <div className="flex flex-col h-10 items-center justify-start w-10">
              <Img
                className="h-10 w-10"
                src="images/img_add.svg"
                alt="addlandingpage"
              />
            </div>
            <Text
              className="mt-1 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
              size="txtPoppinsSemiBold24Black90001"
            >
              {props?.addtext}
            </Text>
          </div>
          <Text
            className="leading-[30.00px] max-w-[1160px] md:max-w-full text-black-900_01 text-lg tracking-[0.36px]"
            size="txtPoppinsLight18Black90001"
          >
            {props?.descriptiontext}
          </Text>
          <Button
            className="border border-deep_purple-400 border-solid cursor-pointer font-poppins font-semibold min-w-[121px] text-center text-sm"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            {props?.addbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

LandingPageSignInColumnThree.defaultProps = {
  addtext: "Add your own",
  descriptiontext:
    "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page",
  addbutton: "Add new",
};

export default LandingPageSignInColumnThree;
