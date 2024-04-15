import "./Header.scss"
import logo from '../../assets/logo.221f6b13e6eaaad5828372464f73a1a4.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetToken, RemoveCart, RemoveToken } from "../../LocalStorage/LocalStorage";
import { logoutUser } from "../../rtk/Slice/SliceUser";
import { toast } from "react-toastify";


const Header = () => {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [showHamburger, setShowHamburger] = useState(false);
  const styleCard = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "1.5rem",
    fontWeight: "400",
    color: "#102a42",
    textTransform: "capitalize",
    letterSpacing: "1px",
  }
  const handleLogout = () => {
    RemoveToken();
    RemoveCart();
    dispatch(logoutUser());
    toast.success("Logout Success")
    navigate("/login")
  }
  return (
    <>
        <div className="header">
          {/* <div className="container"> */}
            <div className="nav-center">
              <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
              </NavLink>
              <div className="links">
                  <NavLink to="/" className={ ({isActive}) => isActive ? "active" : "" } >
                    Home
                  </NavLink>
                  <NavLink to="/about" className={ ({isActive}) => isActive ? "active" : "" } >
                    About
                  </NavLink>
                  <NavLink to="/products" className={ ({isActive}) => isActive ? "active" : "" } >
                    Products
                  </NavLink>
              </div>
              <div className="card-wrapper">
                <NavLink to="/cart" className="card" style={styleCard} >
                    <span>Cart</span>
                    <div className="badge-icon" data-count={cart.length} >
                      <FaCartShopping className="cart-icon" />
                    </div>
                </NavLink>
                {GetToken() ? (
                  <button
                    className="btn-logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login" className="login" style={styleCard} >
                    <span>Login</span>
                    <MdPersonAddAlt1 />
                  </NavLink>
                )}
              </div>
              <button className="nav-toggle"
                onClick={() => setShowHamburger (!showHamburger)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div className={showHamburger ? "hamburger show-links" : "hamburger hide-links"} >
              <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
                <button className="btn-close"
                  onClick={() => setShowHamburger (!showHamburger)}
                >
                  <IoMdCloseCircle />
                </button>
              </NavLink>
              <div className="links">
                  <NavLink to="/" onClick={() => setShowHamburger (!showHamburger)} >
                    Home
                  </NavLink>
                  <NavLink to="/about"  onClick={() => setShowHamburger (!showHamburger)} >
                    About
                  </NavLink>
                  <NavLink to="/products"  onClick={() => setShowHamburger (!showHamburger)} >
                    Products
                  </NavLink>
              </div>
              <div className="card-wrapper">
                <NavLink to="/cart" className="card" style={styleCard}
                  onClick={() => setShowHamburger (!showHamburger)}
                >
                    <span>Cart</span>
                    <div className="badge-icon" data-count={cart.length} >
                  <FaCartShopping className="cart-icon" />
                    </div>
                  {/* <span className="badge">5</span> */}
                </NavLink>
                {GetToken() ? (
                  <button
                    className="btn-logout"
                    onClick={() => {
                      handleLogout();
                      setShowHamburger (!showHamburger);
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login" className="login" style={styleCard}
                  onClick={() => setShowHamburger (!showHamburger)}
                >
                  <span>Login</span>
                  <MdPersonAddAlt1 />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        {/* </div> */}
    </>
  )
}

export default Header