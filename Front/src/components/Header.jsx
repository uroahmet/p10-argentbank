import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/images/argentBankLogo.webp";
import { logout } from "../redux/slices/auth.slice";
import { loadUserProfile } from "../redux/slices/api";
import "../sass/components/_Header.scss";

function Header() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  useEffect(() => {
    if (token) {
      dispatch(loadUserProfile(token));
    }
  }, [dispatch, token]);
  return (
    <header>
      <h1 className="sr-only">Argent Bank</h1>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>
        {token ? (
          <div className="connected">
            <Link to="/user">
              <i className="fa-solid fa-2x fa-circle-user" />
              {user?.userName}
            </Link>
            <Link to="/" onClick={handleLogout}>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              <p> Sign out </p>
            </Link>
          </div>
        ) : (
          <div className="not-connected">
            <Link to="/login">
              <i className="fa-solid fa-circle-user"></i>
              <p>Sign In</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
