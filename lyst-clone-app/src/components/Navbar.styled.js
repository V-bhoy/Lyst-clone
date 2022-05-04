import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 0.7rem 1.4rem;
  user-select: none;
  @media (max-width: 868px) {
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
  cursor: pointer;
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
`;

export const NavInput = styled.input`
  width: 100%;
  padding: 0 0.2rem;
  border: none;
  font-size: 1rem;
  outline: none;
  margin-left: 0.4rem;
`;

export const SecondaryNavTop = styled.div`
  width: 100%;
  margin-top: 6.2rem;
  border-bottom: 1px solid #111;
  display: flex;
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
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 60%;
  width: 100%;
  z-index: 11;
`;

export const CloseNav = styled.div`
  position: absolute;
  top: 10rem;
  right: 2rem;
  z-index: 22222;
  cursor: pointer;
  background: #f5f4f2;
  border-radius: 50%;
  padding: 0.4rem;
`;
