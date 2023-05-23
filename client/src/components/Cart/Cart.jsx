import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./Cartitem/Cartitem";
import "../Cart/Cart.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import EmptyCart from "../../assests/empty_cart.svg";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedin] = useState(false);

    const checkAuth = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedin(true);
            }

        });
    }

    useEffect(() => {
        checkAuth()
    }, []);


    const { cartItems, cartSubTotal } = useContext(Context);

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const handlePayment = async () => {

        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", { products: cartItems, });
            console.log(res)
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>
                {isLoggedIn ? <>
                    {!cartItems?.length && <div className="empty-cart">
                        <img className="empty-cart" src={EmptyCart} alt="" />
                        {/* <BsCartX /> */}
                        <span>No product in the cart.</span>
                        <button className="return-cta" onClick={() => setShowCart(false)}>RETURN TO SHOP</button>
                    </div>}
                    {!!cartItems?.length && <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text-total">&#8377;{cartSubTotal}</span>
                            </div>
                            <div className="button" onClick={handlePayment}>
                                <button className="checkout-cta">Checkout</button>
                            </div>
                        </div>
                    </>}
                </> :
                    <div className="cart-missing">
                        <BsCartX />
                        <span>Missing Cart items?</span>
                        <p>Login to see the items you added previously</p>
                        <button className="btn" onClick={() => navigate('/Login')}>
                            <span>Login</span>
                        </button>

                    </div>

                }
            </div>
        </div>
    );
};

export default Cart;
