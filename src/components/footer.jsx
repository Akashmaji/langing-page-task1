import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import {  Img, Input, Line, SeekBar, Text } from "components";
import LandingPageSignInColumnThree from "components/LandingPageSignInColumnThree";
import LandingPageSignInLoginwithother from "components/LandingPageSignInLoginwithother";
import LandingPageSignInRowrectangleseventyone from "components/LandingPageSignInRowrectangleseventyone";
import LandingPageSignInSigninjoinin from "components/LandingPageSignInSigninjoinin";

const footerjs = () => {
  return (
    <>
    <footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col gap-[58px] items-center justify-center mt-[57px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[85%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start md:mt-0 mt-0.5 w-[8%] md:w-full">
                <Text
                  className="text-black-900_01 text-sm tracking-[0.07px]"
                  size="txtPoppinsBold14"
                >
                  Hobbycue
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">About Us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1 text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Our Services
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[5px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Work with Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1.5 text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">FAQ</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1 text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start w-[10%] md:w-full">
                <Text
                  className="text-black-900_01 text-sm tracking-[0.07px]"
                  size="txtPoppinsBold14"
                >
                  How Do I
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">Sign Up</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[5px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Add a Listing
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[5px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Claim Listing
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[5px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Post a Query
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1 text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Add a Blog Post
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[3px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Other Queries
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start w-[8%] md:w-full">
                <Text
                  className="text-black-900_01 text-sm tracking-[0.07px]"
                  size="txtPoppinsBold14"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">Listings</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[5px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Blog Posts
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[3px] text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Shop / Store
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1.5 text-black-900_01 text-sm tracking-[0.07px]"
                    >
                      <Text size="txtPoppinsRegular14Black90001">
                        Community
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-[30%] md:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="text-black-900_01 text-sm tracking-[0.07px]"
                    size="txtPoppinsBold14"
                  >
                    Social Media
                  </Text>
                  <div className="flex flex-row gap-6 items-center justify-between w-full">
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_104498facebookicon.svg"
                        alt="104498facebooki"
                      />
                    </Button>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_5296514birdtw.svg"
                        alt="5296514birdtw"
                      />
                    </Button>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_5335781camera.svg"
                        alt="5335781camera"
                      />
                    </Button>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_5279116pinpin.svg"
                        alt="5279116pinpin"
                      />
                    </Button>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_843777googleg.svg"
                        alt="843777googleg"
                      />
                    </Button>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      />
                    </Button>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_4375108logotelegramicon.svg"
                        alt="4375108logotele"
                      />
                    </Button>
                    <div className="bg-blue_gray-50 flex flex-col h-6 items-center justify-start p-1 rounded-[50%] w-6">
                      <div className="flex flex-col h-4 items-center justify-start py-0.5 w-4">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-3"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="text-black-900_01 text-sm tracking-[0.07px]"
                    size="txtPoppinsBold14"
                  >
                    Invite Friends
                  </Text>
                  <div className="bg-white-A700 border border-deep_purple-400 border-solid flex flex-row items-center justify-between pl-4 rounded-lg w-full">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtPoppinsRegular12Gray500"
                    >
                      Email ID
                    </Text>
                    <Button
                      className="cursor-pointer font-semibold min-w-[59px] rounded-br-lg rounded-tr-lg text-center text-xs tracking-[0.06px]"
                      color="deep_purple_400"
                      size="sm"
                      variant="fill"
                    >
                      Invite
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-col items-center justify-end p-[27px] sm:px-5 w-full">
              <Text
                className="mt-0.5 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsMedium14Black90001"
              >
                © Purple Cues Private Limited  Made By akash
              </Text>
            </div>
          </div>
        </footer>
        </>
  );
};

export default footerjs;