import React from "react";
import { Link } from "react-router-dom";

interface Details {
  text: string;
}

const Signin = ({ text }: Details) => {
  return (
    <>
      <Link to="/" className="nav-link sign-btn text-center">
        <i className="fab fa-twitter"></i> {text}
      </Link>
    </>
  );
};

export default Signin;
