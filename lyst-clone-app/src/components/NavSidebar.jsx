import React from "react";
import { Link } from "react-router-dom";
import { LinkDiv, SideBarDiv } from "./Navbar.styled";

const NavSidebar = ({ data }) => {
  return (
    <>
      <SideBarDiv>
        <LinkDiv>
          {data.map((item, index) => {
            return (
              <Link className="hover:underline" key={index} to={"/"}>
                {item}
              </Link>
            );
          })}
        </LinkDiv>
      </SideBarDiv>
    </>
  );
};

export default NavSidebar;
