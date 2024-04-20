import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./App";

export default function Navbar() {

  const { cardItem,setCheckReg} = useContext(cartContext);


  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-header">
          <h1 className="navbar-brand">Pets-Shop</h1>
        </div>
        <button
          className="btn btn-primary navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navCon"
        >
          X
        </button>
        <div className=" navbar-nav navbar-collapse collapse" id="navCon">
          <ul className=" nav ">
            <Link to="/" className="nav-link">
              <li> HOME</li>
            </Link>
            <Link to="/bird" className="nav-link">
              <li> BIRDS</li>
            </Link>
            <Link to="/animal" className="nav-link">
              <li> ANIMALS</li>
            </Link>
            <Link to="/fish" className="nav-link">
              <li> FISH</li>
            </Link>
            <Link to="/food" className="nav-link">
              <li> FOODS</li>
            </Link>
            {/* <Link to="/about" className="nav-link">
              <li> ABOUT</li>
            </Link> */}
            <Link to="/contact" className="nav-link">
              <li> CONTACT-US</li>
            </Link>
            <Link to="/card" className="nav-link">
              <li>
                View Card
                <sup
                  className="bg-danger"
                  style={{ padding: "5px", borderRadius: "30px" }}
                >
                  {cardItem.length}
                </sup>
              </li>
            </Link>
            <Link to="" className="nav-link dropdown">
              <li className="dropdown-toggle" data-bs-toggle="dropdown">
                Card Store
              </li>
              <div className="dropdown-menu">
                <Link to="/update" className="dropdown-item">
                  Upload
                </Link>
                <Link to="/delete" className="dropdown-item">
                  Delete
                </Link>
              </div>
            </Link>
            <Link to="" className="nav-link">
              <li className="btn login btn-primary" onClick={()=>setCheckReg(true)}> Logout</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
