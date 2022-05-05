import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import ProductsFilterBar from "../components/ProductsFilterBar";
import data from "../db.json";
import {
  ProdGridDiv,
  ProdHeading,
  ProdSection,
} from "./StyledComponents/Products.styled";

const Products = () => {
  const { id } = useParams();
  const Data = data[id.toLowerCase()] || [];
  let heading;
  id === "Coats" || id === "Dresses" ? (heading = "Women") : (heading = "Men");
  return (
    <>
      <ProdHeading>
        <h1>
          {id} for {heading}
        </h1>
      </ProdHeading>
      <ProdSection className="w-10/12 m-auto h-auto">
        <div>
          <ProductsFilterBar />
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:justify-between lg:flex-row md:justify-between md:flex-row items-center">
            <h2 className="text-sm lg:text-xl font-medium md:text-[18px]">
              2,155,528 products, 151 stores
            </h2>
            <select
              className="outline-none border border-black py-2 px-2 font-bold text-sm"
              name="sortBy"
              id="sortBy"
            >
              <option value="SBR">Sort by recommended</option>
              <option value="h2l">Sort by price(high to low)</option>
              <option value="l2h">Sort by price(low to high)</option>
            </select>
          </div>
          <ProdGridDiv>
            {Data.map((item) => {
              return <ProductItem key={item.id} {...item} />;
            })}
          </ProdGridDiv>
        </div>
      </ProdSection>
    </>
  );
};

export default Products;
