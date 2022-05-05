import styled from "styled-components";

export const ProdHeading = styled.div`
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f4f2;
  border-bottom: 1px solid #111;
  padding: 2rem 6rem;
  font-size: 2.2rem;
  text-transform: uppercase;
  @media all and (max-width: 868px) {
    padding: 2rem 1rem;
    margin-top: 4rem;
    border-top: 1px solid #111;
  }
`;

export const ProdSection = styled.section`
  display: grid;
  grid-template-columns: 235px minmax(0, 1fr);
  grid-template-rows: 1fr;
  column-gap: 30px;
  background-color: #fff;
  padding: 16px 40px 40px;
  max-width: 1305px;
  margin: 0 auto;
  @media all and (max-width: 968px) {
    padding: 1rem 0;
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProdFilterDiv = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  align-self: start;
  height: 100vh;
  user-select: none;
  overflow-y: scroll;
  @media all and (max-width: 968px) {
    display: none;
  }
`;

export const ProdGridDiv = styled.aside`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  @media all and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
