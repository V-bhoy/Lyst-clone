import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import ProductsFilterBar from "../components/ProductsFilterBar";
import data from "../db.json";
import { ProdHeading, ProdSection } from "./StyledComponents/Products.styled";

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
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">
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
          <div className="grid grid-cols-4 mt-8">
            {Data.map((item) => {
              return <ProductItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </ProdSection>
    </>
  );
};

export default Products;
