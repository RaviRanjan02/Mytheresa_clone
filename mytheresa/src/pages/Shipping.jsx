import React from 'react'
import "./Shipping.css"
import { Link } from 'react-router-dom'

const Shipping = () => {
  return (
    <div classNameName="Payment_Main">
    <div className="bottom">
        <div className="shippingadd" ><h3>Shipping Address</h3></div>
        
        <div className="add_details" >
            <table>
                <tr>
                    <td className="name">First Name:</td>
                    <td><input className="input" type="text" value="" /></td>
                </tr>
                <tr>
                    <td className="name">Last Name:</td>
                    <td><input className="input" type="text" value="" /></td>
                </tr>
                <tr>
                    <td className="name">Country:</td>
                    <td >
                        <select className="Shipping_select" >
                            <option>India</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>United States</option>
                            <option>Spain</option>
                            <option>Italy</option>
                            <option>Austrailia</option>
                            <option>China</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="name">City:</td>
                    <td><input className="input" type="text"   /></td>
                </tr>
                <tr>
                    <td className="name">Zip/Postal code:</td>
                    <td><input className="input" type="number"   /></td>
                </tr> 
                <tr>
                    <td className="name">Address line1:</td>
                    <td><input className="input" type="text"  /></td>
                </tr>
                <tr>
                    <td className="name">Address line2:</td>
                    <td><input className="input" type="text"  /></td>
                </tr>
                <tr>
                    <td className="name">Phone Number:</td>
                    <td><div className="unique"><input className="input" type="Number" /></div></td>
                </tr>
            </table>
            <div className="checkline">
                <input  type="checkbox" />
                <span>Use as default address</span>
            </div>
            <div className="save_cancel">
                <button className="save">Save</button>
                <button className="cancel">Cancel</button>
            </div>
        </div>
    </div>
    <div className="Last_section">
        <div className="payment_box">
            <div>
                <Link to="/payment"><button className="place_order">Place Your Order</button></Link>
            </div>
            
        </div>
    </div>

    </div>
  )
}

export default Shipping