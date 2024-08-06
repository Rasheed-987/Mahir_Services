
import React, { useState } from 'react';
import './AddressForm.css';

const AddressForm = () => {
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ city, area, address });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add New Address</h2>
                <button className="manual-address-btn">Manual Address</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="city">Please select City</label>
                        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="">Choose</option>
                            {/* Add city options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Please select Area</label>
                        <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
                            <option value="">Choose</option>
                            {/* Add area options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Please type your address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter street"
                        />
                    </div>
                    <button type="submit"  className="done-btn">Done</button>
                </form>
            </div>
        </div>

);
};

export default AddressForm;
