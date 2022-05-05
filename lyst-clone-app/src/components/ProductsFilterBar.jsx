import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProdFilterDiv } from "../pages/StyledComponents/Products.styled";
import { useDispatch } from "react-redux";
import { clearFilter, filterData } from "../redux/action";

const ProductsFilterBar = () => {
  const [active, setActive] = useState({
    gender: false,
    category: false,
    sale: false,
    price: false,
  });

  const dispatch = useDispatch();
  return (
    <>
      <ProdFilterDiv>
        <div className="flex justify-between  py-3 px-2 ">
          <p className="text-[22px] self-end">Filters</p>
          <button
            className="font-bold text-sm self-end"
            onClick={() => {
              dispatch(clearFilter());
              setActive(!active);
            }}
          >
            Clear all
          </button>
        </div>
        <div className="border-t border-black  py-4 px-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => {
              setActive({ ...active, gender: !active.gender });
            }}
          >
            <h3 className="font-bold">Gender</h3>
            <KeyboardArrowDownIcon
              style={
                active.gender
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.gender ? { display: "block" } : { display: "none" }}
            className="px-4 bg-neutral-100 py-2"
          >
            <label>
              <input type="radio" name="gender" id="Men" />
              &nbsp; Men
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="gender" id="Men" />
              &nbsp; Women
            </label>
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div
            className="flex justify-between items-center "
            onClick={() => {
              setActive({ ...active, category: !active.category });
            }}
          >
            <h3 className="font-bold">Category</h3>
            <KeyboardArrowDownIcon
              style={
                active.category
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.category ? { display: "block" } : { display: "none" }}
            className="px-4 bg-neutral-100 py-2"
          >
            <label>
              <input type="radio" name="category" id="Clothing" />
              &nbsp; Clothing
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="category" id="Shoes" />
              &nbsp; Shoes
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="category" id="Accessories" />
              &nbsp; Accessories
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="category" id="Bags" />
              &nbsp; Bags
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="category" id="Jewelry" />
              &nbsp;Jewelry
            </label>
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setActive({ ...active, sale: !active.sale });
            }}
          >
            <h3 className="font-bold">Sale</h3>
            <KeyboardArrowDownIcon
              style={
                active.sale
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.sale ? { display: "block" } : { display: "none" }}
            className="px-4 bg-neutral-100 py-2"
          >
            <label>
              <input type="radio" name="sale" id="OnSale" />
              &nbsp; On Sale
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="sale" id="sale" />
              &nbsp; 20% off or more
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="sale" id="sale" />
              &nbsp; 50% off or more
            </label>
            <br />
            <br />
            <label>
              <input type="radio" name="sale" id="sale" />
              &nbsp; 70% off or more
            </label>
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setActive({ ...active, price: !active.price });
            }}
          >
            <h3 className="font-bold">Price</h3>
            <KeyboardArrowDownIcon
              style={
                active.price
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.price ? { display: "block" } : { display: "none" }}
            className="px-4 bg-neutral-100 py-2"
          >
            <label>
              <input
                type="radio"
                name="price"
                id="1000"
                onClick={(e) => dispatch(filterData(e.target.id))}
              />
              &nbsp; Below $1000
            </label>
            <br />
            <br />
            <label>
              <input
                type="radio"
                name="price"
                id="500"
                onClick={(e) => dispatch(filterData(e.target.id))}
              />
              &nbsp; Below $500
            </label>
            <br />
            <br />
            <label>
              <input
                type="radio"
                name="price"
                id="200"
                onClick={(e) => dispatch(filterData(e.target.id))}
              />
              &nbsp; Below $200
            </label>
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Shipping</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Color</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Material</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Designers</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-t border-black  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Stores</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </ProdFilterDiv>
    </>
  );
};

export default ProductsFilterBar;
