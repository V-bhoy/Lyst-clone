import React from 'react'
import { useState } from "react";
import "./InstructionPage.css"
const InstructionPage = () => {
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
                                    <a>Log in</a></p>
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
                        <form class="row g-3 onSubmit=(handleSubmit)">
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
                                <select id="inputState" class="form-select">
                                    name='country'
                                    onChange={handleInputs}
                                    <option selected name='country' value={user.country}>USA</option>
                                    <option name='country' value={user.country}>INDIA</option>
                                    <option value={user.country}>CHINA</option>
                                    <option value={user.country}>RUSSIA</option>
                                    <option value={user.country}>NEPAL</option>
                                    <option value={user.country}>BHUTAN</option>
                                    <option value={user.country}>PAKISTAN</option>
                                    <option value={user.country}>AUSTRALIA</option>
                                    <option value={user.country}>ENGLAND</option>
                                    <option value={user.country}>NEW-ZELAND</option>
                                    <option value={user.country}>SRI-LANKA</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" class="form-select">
                                    name='state'
                                    value={user.state}
                                    onChange={handleInputs}
                                    <option selected value={user.country}>Choose...</option>
                                    <option value="Bihar">BIHAR</option>
                                    <option value={user.state}>ASSAM</option>
                                    <option value={user.state}>GUJRAT</option>
                                    <option value={user.state}>MUMBAI</option>
                                    <option value={user.state}>DELHI</option>
                                    <option value={user.state}>JAMMU & KASHMIR</option>
                                    <option value={user.state}>UTTAR-PRADESH</option>
                                    <option value={user.state}>JHARKHAND</option>
                                    <option value={user.state}>MADHYA-PRADESH</option>
                                    <option value={user.state}>HIMACHAL-PRADESH</option>
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


                    <div className='Instruction-Main-right-product'>
                        <div>
                        <img src="img_girl.jpg" alt="Girl in a jacket"/>
                        </div>
                        <div>
                            <h6>product name</h6>
                            <p>Product Size</p>
                        </div>
                        <div>
                            <h6>Price</h6>
                        </div>
                    </div>




                    <div className='Instruction-Main-right-summary'>
                        <h2>Order Summary</h2>
                        <div className='Instruction-Main-right-summary-details'>
                            <div>
                                <p>
                                    Subtotal</p>
                                <p>Shipping</p>
                                <p>Taxes (estimated)</p>
                                <hr></hr>
                                <h4>Total</h4>
                            </div>
                            <div>
                                <p>€154.00
                                </p>
                                <p>€5.99
                                </p>
                                <p>-€49.69
                                </p>
                                <hr></hr>
                                <h4>USD $805.31
                                </h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructionPage;