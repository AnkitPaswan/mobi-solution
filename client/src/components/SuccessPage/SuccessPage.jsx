import React from 'react';
import './SuccessPage.scss';
import SuccessImg from "../../assests/success.webp";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SuccessPage = () => {
    const navigate = useNavigate();
    toast.success("Order Successfully Placed", {
        theme: "colored",
        hideProgressBar: true,
    });
    return (
        <div>
            <div className="success">
                <img src={SuccessImg} alt="" />
                <h2>Your Order is Successful.</h2>
                <span>Thank you so much for your Order.</span>
                <button className="btn" onClick={() => navigate('/')}>Back To Home</button>
            </div>
        </div>
    )
}

export default SuccessPage
