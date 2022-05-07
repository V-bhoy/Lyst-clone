import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchList = ({ value, setsearchActive }) => {
  const { searchData } = useSelector((state) => state.products);
  const data = searchData ? searchData : [];
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-12 py-4 left-0 w-full h-screen md:h-[45rem] lg:h-[32rem] bg-white overflow-x-auto z-20">
        <div>
          {data.map((item) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate(`/products/${value}`);
                  setsearchActive(false);
                }}
                key={item.id}
              >
                <div className="flex h-[5rem] py-2 px-6 border border-b-grey hover:bg-[#f5f4f2]">
                  <img src={item.img} alt={item.title} />
                  <div className="ml-4 mt-4">
                    <p className=" text-[16px]">{item.title}</p>
                    <p className="text-[14px]">{value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-12 right-0 lg:right-[-2.4rem]  w-screen h-screen bg-black opacity-60 z-10"></div>
    </>
  );
};

export default SearchList;
