import React from "react";
import { useState } from "react";
import CartItemSummry from "./CartItemSummry";
// import "./StyledComponents/CartItemSummryStyled";
import "./StyledComponents/CartItemSummryStyled";
import "./Instruction.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Instruction = () => {
  const { currentUser } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    address: "",
    email: currentUser,
    address2: "",
    city: "",
    country: "",
    state: "",
    postalCode: "",
    phone: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("userData", JSON.stringify(user));
    navigate("/shipping");
  };
  return (
    <div className="Instruction">
      <div className="Instruction-Main">
        <div className="Instruction-Main-left">
          <div className="Instruction-Main-left-email">
            <div className="Instruction-Main-left-email-top">
              <div>
                <h5 className="text-[16px] font-bold">Contact information</h5>
              </div>
            </div>
            <div className="mb-3 Instruction-Main-left-email-bottom">
              <input
                type="email"
                name="email"
                value={currentUser}
                className="focus:ring-indigo-500 mt-2 mb-2  outline-none focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md text-xl border-gray-300 py-2"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="Instruction-Main-left-form">
            <form
              className="mt-5 md:mt-0 md:col-span-2 "
              onSubmit={handleSubmit}
            >
              <div className="flex w-full">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="fName"
                    value={user.fName}
                    onChange={handleInputs}
                    className="w-[300px] mt-1 px-2 py-2 focus:ring-indigo-500 outline-none focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="lName"
                    value={user.lName}
                    onChange={handleInputs}
                    className="mt-1 ml-3 py-2 px-2 w-[310px] outline-none focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleInputs}
                  className="mt-4 focus:ring-indigo-500 py-2 px-2 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="inputAddress"
                  placeholder="Address "
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="address2"
                  value={user.address2}
                  onChange={handleInputs}
                  className="mt-4 focus:ring-indigo-500 py-2 px-2 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="inputAddress2"
                  placeholder="Apartment, stuite, etc (optional)"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleInputs}
                  placeholder="City"
                  className="mt-4 focus:ring-indigo-500 py-2 px-2 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="inputCity"
                />
              </div>
              <div className="flex w-full mt-4 justify-between">
                <div className="col-md-4">
                  <select
                    id="inputState"
                    className="focus:ring-indigo-500 py-2 focus:border-indigo-500 h-full outline-none pl-2 pr-7 border border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                    name="country"
                    onChange={handleInputs}
                  >
                    <option selected name="country" value={user.country}>
                      USA
                    </option>
                    <option name="country" value="INDIA">
                      INDIA
                    </option>
                    <option name="country" value="CHINA">
                      CHINA
                    </option>
                    <option name="country" value="RUSSIA">
                      RUSSIA
                    </option>
                    <option name="country" value="NEPAL">
                      NEPAL
                    </option>
                    <option name="country" value="BHUTAN">
                      BHUTAN
                    </option>
                    <option name="country" value="PAKISTAN">
                      PAKISTAN
                    </option>
                    <option name="country" value="AUSTRALIA">
                      AUSTRALIA
                    </option>
                    <option name="country" value="ENGLAND">
                      ENGLAND
                    </option>
                    <option name="country" value="NEW-ZELAND">
                      NEW-ZELAND
                    </option>
                    <option name="country" value="SRI-LANKA">
                      SRI-LANKA
                    </option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    id="inputState"
                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 outline-none  bg-transparent text-gray-500 sm:text-sm rounded-md border border-gray-300"
                    name="state"
                    onChange={handleInputs}
                  >
                    <option selected name="state" value="GOA">
                      GOA
                    </option>
                    <option name="state" value="BIHAR">
                      BIHAR
                    </option>
                    <option name="state" value="ASSAM">
                      ASSAM
                    </option>
                    <option name="state" value="GUJRAT">
                      GUJRAT
                    </option>
                    <option name="state" value="MUMBAI">
                      MUMBAI
                    </option>
                    <option name="state" value="DELHI">
                      DELHI
                    </option>
                    <option name="state" value="JAMMU & KASHMIR">
                      JAMMU & KASHMIR
                    </option>
                    <option name="state" value="UTTAR-PRADESH">
                      UTTAR-PRADESH
                    </option>
                    <option name="state" value="JHARKHAND">
                      JHARKHAND
                    </option>
                    <option name="state" value="MADHYA-PRADESH">
                      MADHYA-PRADESH
                    </option>
                    <option name="state" value="HIMACHAL-PRADESH">
                      HIMACHAL-PRADESH
                    </option>
                  </select>
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    name="postalCode"
                    value={user.postalCode}
                    onChange={handleInputs}
                    placeholder="Postal code"
                    className="focus:ring-indigo-500 py-2 px-2 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    id="inputZip"
                  />
                </div>
              </div>
              <div className="col">
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  className="mt-4 mb-2 focus:ring-indigo-500 outline-none py-2 px-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Phone(optional"
                  aria-label="First name"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label">
                    Save this information for next time
                  </label>
                </div>
              </div>
              <div className="col-12 mt-4 flex justify-between">
                <div>
                  <Link to="/cart">
                    <i className="fa-solid fa-angle-left"></i> Return to cart
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black px-2 py-2 text-white"
                  >
                    Continue to shipping
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="Instruction-Main-right">
          <CartItemSummry />
        </div>
      </div>
    </div>
  );
};

export default Instruction;
