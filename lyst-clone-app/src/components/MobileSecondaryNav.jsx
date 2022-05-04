import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  MobileSecButton,
  MobileSecDiv,
  MobileSecLink,
} from "./ResponsiveNav.styled";
import { Link } from "react-router-dom";

const MobileSecondaryNav = () => {
  const [ActiveLink, setActiveLink] = useState("Women");
  return (
    <>
      <MobileSecDiv>
        <div className="flex justify-center border-b-2 border-slate-500 pb-4">
          <p
            className="text-xl"
            style={
              ActiveLink === "Women"
                ? { fontWeight: "Bold" }
                : { fontWeight: "200" }
            }
            onClick={() => setActiveLink("Women")}
          >
            WOMEN
          </p>
          <p
            className="text-xl ml-20"
            style={
              ActiveLink === "Men"
                ? { fontWeight: "Bold" }
                : { fontWeight: "200" }
            }
            onClick={() => setActiveLink("Men")}
          >
            MEN
          </p>
        </div>
        <div
          className="flex"
          style={
            ActiveLink === "Men"
              ? {
                  transform: "translate(-100%)",
                  transition: "transform .35s cubic-bezier(.23,1,.32,1) 0s",
                }
              : {
                  transform: "translate(0)",
                  transition: "transform .35s cubic-bezier(.23,1,.32,1) 0s",
                }
          }
        >
          <MobileSecLink>
            <MobileSecButton>
              <Link to="/"> Clothing </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Shoes </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Accessories </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Bags </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Jewelery </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Popular Brands </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/">All {ActiveLink}'s</Link>
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/">Sale</Link>
            </MobileSecButton>
            <p className="p-4">Country:IN - US$</p>
            <p className="p-4">Help Center</p>
            <p className="p-4">Contact us</p>
            <p className="p-4">About us</p>
            <p className="p-4">Careers</p>
          </MobileSecLink>
          <MobileSecLink>
            <MobileSecButton>
              <Link to="/"> Clothing </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Shoes </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Accessories </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Bags </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Jewelery </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/"> Popular Brands </Link>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/">All {ActiveLink}'s</Link>
            </MobileSecButton>
            <MobileSecButton>
              <Link to="/">Sale</Link>
            </MobileSecButton>
            <p className="p-4">Country:IN - US$</p>
            <p className="p-4">Help Center</p>
            <p className="p-4">Contact us</p>
            <p className="p-4">About us</p>
            <p className="p-4">Careers</p>
          </MobileSecLink>
        </div>
      </MobileSecDiv>
    </>
  );
};

export default MobileSecondaryNav;
