import styled from "styled-components";

export const MobileNavDiv = styled.nav`
  position: absolute;
  top: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  padding: 0.4rem 0rem;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 868px) {
    display: none;
  }
`;

export const HamButton = styled.button`
  margin-right: 20px;
  margin-left: 10px;
  cursor: pointer;
  padding: 0;
  display: block;
`;

export const HamDiv = styled.div`
  background-color: #000;
  border-radius: 1px;
  width: 24px;
  height: 2px;
  margin: 5px 0;
  transition: 0.4s;
  display: block;
`;

export const MobileSecDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  position: fixed;
  top: 4rem;
  z-index: 802;
`;

export const MobileSecLink = styled.div`
  background-color: #fff;
  width: 100vw;
  padding-bottom: 200px;
  flex-shrink: 0;
`;
export const MobileSecButton = styled.button`
  border-bottom: 1px solid #36415d;
  padding: 16px 20px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  position: relative;
  display: block;
`;
