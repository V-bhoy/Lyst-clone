import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 0.7rem 1.4rem;
  user-select: none;
  position: relative;
  z-index: 112;
  @media all and (max-width: 868px) {
    display: none;
  }
`;
export const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8rem;
  gap: 1.2rem;
`;

export const NavButton = styled.button`
  background-color: #111;
  color: #fff;
  font-weight: 600;
  padding: 0 0.6rem;
  outline: none;
  border: none;
`;

export const BottomNav = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.8rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  gap: 1.2rem;
`;

export const InputDiv = styled.div`
  width: 72rem;
  display: flex;
  align-items: center;
  padding: 0.6rem;
  border: 1px solid #111;
  position: relative;
`;

export const NavInput = styled.input`
  width: 100%;
  padding: 0 0.2rem;
  border: none;
  font-size: 1rem;
  outline: none;
  margin-left: 0.4rem;
`;

export const SecMainDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2222;
  @media all and (max-width: 868px) {
    display: none !important;
  }
`;

export const SecondaryNavTop = styled.div`
  width: 100%;
  border-bottom: 1px solid #111;
  display: flex;
  background-color: #fff;
  gap: 2rem;
  font-size: 0.9rem;
  align-items: center;
  padding: 0.6rem 3rem;
`;

export const SideBarDiv = styled.div`
  width: 100%;
  padding: 2rem 3.2rem;
  display: flex;
  font-size: 0.9rem;
  height: fit-content;
  background-color: #fff;
  position: relative;
  z-index: 1111;
`;
export const LinkDiv = styled.div`
  width: 16.4rem;
  border-right: 1px solid #111;
  display: flex;
  font-size: 0.9rem;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
`;

export const OverlayDiv = styled.div`
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 60%;
  width: 100%;
  z-index: 111;
`;

export const CloseNav = styled.div`
  position: absolute;
  top: 4rem;
  right: 2rem;
  z-index: 22222;
  cursor: pointer;
  background: #f5f4f2;
  border-radius: 50%;
  padding: 0.4rem;
`;

export const DropOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 111;
`;
export const DropDown = styled.div`
  position: absolute;
  left: -10rem;
  top: 1.8rem;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: fit-content;
  padding: 2rem;
  z-index: 2292;
`;

export const DropDownSpan = styled.span`
  width: 21px;
  height: 15px;
  border: none;
  position: absolute;
  overflow: hidden;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 21293;
  &::after {
    content: "";
    width: 18px;
    height: 20px;
    background-color: #fff;
    transform: rotate(45deg);
    display: block;
    position: relative;
    left: 1px;
    top: 6px;
    box-shadow: 0 0 5px rgb(0 0 0 / 35%);
  }
`;
