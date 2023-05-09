import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineLogout, MdLogin } from "react-icons/md";
import Search from "./search/search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./Header.scss";
// import { toast } from "react-toastify";

const Header = () => {

  const [userName, setUserName] = useState();
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();

  const changeAuthState = async () => {
    var auth = getAuth();
    if (isLoggedIn) {
      await auth.signOut();
    } else {
      navigate("/login");
    }

  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const checkAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('Auth state login', user.displayName)
        // toast(user.displayName)
        setIsLoggedin(true);
        localStorage.setItem("user", user);
        setUserName(user.displayName);
        console.log(user);
      } else {
        setIsLoggedin(false);
        // console.log('Auth state logout');
        localStorage.removeItem("user");
        setUserName("");
        // toast("Logout Success")
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    checkAuth();
  }, []);


  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li onClick={() => navigate("/")}>Categories</li>
            <li>{userName ? `Welcome - ${userName}` : ""}</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>Mobi-Solution</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            {/* <AiOutlineHeart /> */}
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            <button className="btn" onClick={changeAuthState}>
              {isLoggedIn ? (
                <>
                  <p>LogOut</p>
                  <span>
                    <MdOutlineLogout />
                  </span>
                </>
              ) :
                <>
                  <p>LogIn</p>
                  <span>
                    <MdLogin />
                  </span>
                </>
              }
            </button>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
