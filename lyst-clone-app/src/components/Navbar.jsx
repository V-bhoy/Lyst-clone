import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import {
  BottomNav,
  DropDown,
  DropDownSpan,
  DropOverlay,
  InputDiv,
  Nav,
  NavButton,
  NavInput,
  TopNav,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import SecondaryNav from "./SecondaryNav";
import MobileNav from "./MobileNav";
import SearchList from "./SearchList";
import { useDispatch } from "react-redux";
import { searchItem } from "../redux/action";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [activeProd, setActiveProd] = useState(false);
  const [activeLink, setActiveLink] = useState("Men");
  const [dropActive, setDropActive] = useState(false);
  const [searchActive, setsearchActive] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const dispatch = useDispatch();

  const searchForItems = (e) => {
    let value = e.target.value;
    if (
      value === "jeans" ||
      value === "coats" ||
      value === "dresses" ||
      value === "jackets"
    ) {
      dispatch(searchItem(value));
      setsearchActive(true);
    } else {
      setsearchActive(false);
    }
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          style={{
            backgroundColor: "#fff",
            color: "#111",
            boxShadow: "none",
            borderBottom: "1px solid #111",
          }}
        >
          <Nav>
            <TopNav>
              <p className="cursor-pointer">IN - US$</p>
              <div
                className="relative cursor-pointer"
                onClick={() => setDropActive(!dropActive)}
              >
                Help
                <KeyboardArrowDownIcon style={{ fontSize: "1rem" }} />
                {dropActive && <DropDownSpan></DropDownSpan>}
                {dropActive && (
                  <DropDown>
                    <Link to={"/"}>
                      <p className="border-b border-black py-4 w-[160px] text-[12px] hover:underline">
                        Help Center
                      </p>
                    </Link>
                    <Link to={"/"}>
                      <p className="border-b border-black py-4 w-[160px] text-[12px] hover:underline">
                        Contact us
                      </p>
                    </Link>
                    <Link to={"/"}>
                      <p className="border-b border-black py-4 w-[160px] text-[12px] hover:underline">
                        About us
                      </p>
                    </Link>
                    <Link to={"/"}>
                      <p className="border-b border-black py-4 w-[160px] text-[12px] hover:underline">
                        Careers
                      </p>
                    </Link>
                  </DropDown>
                )}
              </div>
              <Link to="/login">
                <p className="hover:underline">Sign in</p>
              </Link>
              <NavButton className="hover:underline">Join</NavButton>
            </TopNav>

            <BottomNav>
              <Link to="/" style={{ width: "6rem", marginLeft: "1rem" }}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1515.903 476.323"
                >
                  <path d="M164.033 11.984H0v454.25h336.268V311.658H164.033V11.984zm403.756.002l-67.975 126.463-67.343-126.463H279.634l136.904 282.01v172.235h163.401V292.738L720.631 11.986H567.789zm496.761 203.78c-15.137-10.51-31.965-17.694-50.47-23.59a511.081 511.081 0 00-56.778-14.507q-41.641-7.577-64.356-13.567c-15.142-3.992-25.23-9.476-26.776-20.89-.615-4.519.026-15.222 6.364-21.377 8.417-8.178 19.364-10.753 32.399-11.122 21.447-.605 28.416 3.039 35.785 8.716 7.352 5.682 12.105 17.45 12.105 30.44v1.262h154v-1.894c-2.948-52.573-21.452-87.193-55.516-112.016Q1000.195.002 909.984 0 813.46 0 761.721 41.009q-51.738 41.015-51.733 111.037 0 35.96 12.617 60.25a108.707 108.707 0 0034.07 39.428 190.67 190.67 0 0049.213 23.977 476.516 476.516 0 0056.147 14.512q42.893 7.562 66.875 14.512c15.978 4.628 28.044 12.408 28.044 23.34 0 10.36-4.609 17.58-9.58 21.711-5.08 4.23-16.788 8.51-29.823 8.51-15.138 0-27.621-4.066-35.401-10.166-7.787-6.09-15.149-18.086-15.98-29.869l-.202-3.783h-162.29v1.263c1.263 35.332 8.302 61.228 21.133 85.832q19.24 36.906 63.412 55.84 22.707 9.455 52.99 14.193 30.29 4.728 68.77 4.728 103.46 0 153.309-41.318 49.828-41.32 49.839-115.77 0-37.226-13.25-62.461a115.457 115.457 0 00-35.331-41.01zm75.339-203.781V151.17h109.779v315.06h157.724V151.17h108.511V11.985h-376.014z"></path>
                </svg>
              </Link>
              <p
                className="text-base cursor-pointer"
                style={
                  activeLink === "Women"
                    ? { borderBottom: "1.6px solid #111" }
                    : { border: "none" }
                }
                onClick={() => {
                  if (activeProd && activeLink === "Men") {
                    setActiveLink("Women");
                    return;
                  }
                  setActiveProd(!activeProd);
                  setActiveLink("Women");
                }}
              >
                WOMEN
              </p>
              <p
                className="text-base cursor-pointer"
                style={
                  activeLink === "Men"
                    ? { borderBottom: "1.6px solid #111" }
                    : { border: "none" }
                }
                onClick={() => {
                  if (activeProd && activeLink === "Women") {
                    setActiveLink("Men");
                    return;
                  }
                  setActiveProd(!activeProd);
                  setActiveLink("Men");
                }}
              >
                MEN
              </p>
              <InputDiv>
                <SearchIcon />
                <NavInput
                  placeholder={
                    activeLink === "Men"
                      ? 'SEARCH (E.G. "Acne Jeans")'
                      : 'SEARCH (E.G. "Valentino dresses")'
                  }
                  onChange={(e) => setsearchValue(e.target.value)}
                  onInput={(e) => {
                    searchForItems(e);
                  }}
                ></NavInput>
                {searchActive && (
                  <SearchList
                    value={searchValue}
                    setsearchActive={setsearchActive}
                  />
                )}
              </InputDiv>
            </BottomNav>
          </Nav>
          <MobileNav />
          <SecondaryNav
            active={activeProd}
            setActiveProd={setActiveProd}
            link={activeLink}
          />
        </AppBar>
      </HideOnScroll>

      <DropOverlay
        style={dropActive ? { display: "block" } : { display: "none" }}
      ></DropOverlay>
    </>
  );
};

export default Navbar;
