import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

const Checkout = ({ products, setRun = f => f, run = undefined }) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    });

    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };

    const showCheckout = () => {
        return  (
            <Link to="/signin">
                <button className="btn btn-primary p-2 by-2">Sign in to checkout</button>
            </Link>
        );
    };

    return (
        <div>
           
            {showCheckout()}
        </div>
    );
};

export default Checkout;
