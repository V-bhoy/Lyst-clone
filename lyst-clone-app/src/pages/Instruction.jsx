import React from 'react'
import { useState } from "react";
import CartItemSummry from './CartItemSummry';
import "./StyledComponents/CartItemSummryStyled"
import "./StyledComponents/CartItemSummryStyled"
import "./Instruction.css"
const Instruction = () => {
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        email: "",
        address: "",
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
        setUser({ ...user, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(user));
    }
    console.log(user);
    return (
        <div className='Instruction'>
            <div className='Instruction-Main'>
                <div className='Instruction-Main-left'>

                    <div className='Instruction-Main-left-email'>
                        <div className='Instruction-Main-left-email-top'>
                            <div>
                                <h5>Contact information</h5>
                            </div>
                            <div>
                                <p>Already have an account?
                                    <a href='./login'>Log in</a></p>
                            </div>
                        </div>
                        <div class="mb-3 Instruction-Main-left-email-bottom">
                            <input type="email"
                                name='email'
                                value={user.email}
                                onChange={handleInputs}
                                class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Email me with news and offers
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='Instruction-Main-left-form'>
                        <form class="row g-3 " onSubmit={handleSubmit}>
                            <div class="col">
                                <input type="text"
                                    name='fName'
                                    value={user.fName}
                                    onChange={handleInputs}

                                    class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col">
                                <input type="text"
                                    name='lName'
                                    value={user.lName}
                                    onChange={handleInputs}
                                    class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                            <div class="col-12">
                                <input type="text"
                                    name='address'
                                    value={user.address}
                                    onChange={handleInputs}
                                    class="form-control" id="inputAddress" placeholder="Address " />
                            </div>
                            <div class="col-12">
                                <input type="text"
                                    name='address2'
                                    value={user.address2}
                                    onChange={handleInputs}
                                    class="form-control" id="inputAddress2" placeholder="Apartment, stuite, etc (optional)" />
                            </div>
                            <div class="col-md-6">
                                <input type="text"
                                    name='city'
                                    value={user.city}
                                    onChange={handleInputs}
                                    placeholder='City' class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name='country' onChange={handleInputs}>


                                    <option selected name='country' value={user.country}>USA</option>
                                    <option name='country' value="INDIA">INDIA</option>
                                    <option name='country' value="CHINA">CHINA</option>
                                    <option name='country' value="RUSSIA">RUSSIA</option>
                                    <option name='country' value="NEPAL">NEPAL</option>
                                    <option name='country' value="BHUTAN">BHUTAN</option>
                                    <option name='country' value="PAKISTAN">PAKISTAN</option>
                                    <option name='country' value="AUSTRALIA">AUSTRALIA</option>
                                    <option name='country' value="ENGLAND">ENGLAND</option>
                                    <option name='country' value="NEW-ZELAND">NEW-ZELAND</option>
                                    <option name='country' value="SRI-LANKA">SRI-LANKA</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name='state' onChange={handleInputs}>

                                    <option selected name='state' value="GOA">GOA</option>
                                    <option name='state' value="BIHAR">BIHAR</option>
                                    <option name='state' value="ASSAM">ASSAM</option>
                                    <option name='state' value="GUJRAT">GUJRAT</option>
                                    <option name='state' value="MUMBAI">MUMBAI</option>
                                    <option name='state' value="DELHI">DELHI</option>
                                    <option name='state' value="JAMMU & KASHMIR">JAMMU & KASHMIR</option>
                                    <option name='state' value="UTTAR-PRADESH">UTTAR-PRADESH</option>
                                    <option name='state' value="JHARKHAND">JHARKHAND</option>
                                    <option name='state' value="MADHYA-PRADESH">MADHYA-PRADESH</option>
                                    <option name='state' value="HIMACHAL-PRADESH">HIMACHAL-PRADESH</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <input type="text"
                                    name='postalCode'
                                    value={user.postalCode}
                                    onChange={handleInputs}
                                    placeholder='Postal code' class="form-control" id="inputZip" />
                            </div>
                            <div class="col">
                                <input type="number"
                                    name='phone'
                                    value={user.phone}
                                    onChange={handleInputs}
                                    class="form-control" placeholder="Phone(optional" aria-label="First name" />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Save this information for next time
                                    </label>
                                </div>
                            </div>
                            <div class="col-12 Instruction-Main-left-form-btn-div">
                                <div><i class="fa-solid fa-angle-left"></i>  Return to cart</div>
                                <div>
                                    <button type="submit" class="btn btn-dark Instruction-Main-left-form-btn">Continue to shipping</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className='Instruction-Main-right'>

                    <CartItemSummry/>
                </div>
            </div>
        </div>
    )
}

export default Instruction;