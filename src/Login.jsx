// import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "./LoginBG/3.jpg"
import { useContext } from "react";
import { cartContext } from "./App";

const validate = (values) => {
  var errors = {};

  if (!values.email) {
    errors.email = "*Required Email";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = "*Invalid Email";
  }
  if (!values.pass) {
    errors.pass = "*Required Password";
  } else if (values.pass.length > 8) {
    errors.pass = "*Must be 8 Charactors Only Allowed";
  } else if (values.pass.length < 4) {
    errors.pass = "*More  then 5 Charactors Only Allowed";
  }
  return errors;
};

export function Login() {

 const navigate = useNavigate();

const {setCheckReg}=useContext(cartContext)
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",   
    },
    validate,
    // onSubmit: (values) => {
    //   alert(`successfully login`);      
    // },
  });
const handleSubmit = (e)=>{
 const email = formik.values.email;
 const pass = formik.values.pass;
  e.preventDefault();
  console.log(pass)
        axios
          .post("http://localhost:8000/login", {
            email,
            pass,
          })
          .then((result) => {
            console.log(result);
            if (result.data === "Success") {
              navigate("/");
              setCheckReg(false);
            }
          })
          .catch((err) => console.log(err));
          
}
const style ={
width:"100%",
height:"610px"
}

const style1 ={
  position:"absolute",
  top:"25%",
  left:"10%"
}
 const style2={
background:"transparent",
 }

 const input = {
   background: "transparent",
   fontSize: "17px",
   fontWeight: "700",
   color:"white",
   textShadow:"0px 0px 2px black,0px 0px 4px white"
 };

 const text = {
   fontSize: "17px",
   fontWeight: "700",
   textShadow: "0px 0px 2px white,0px 0px 4px black",
 };
  return (
    <>
      <div className="" style={style}>
        <img src={img} width={"100%"} height={"100%"} alt="" />
        <div className="container" style={style1}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card" style={style2}>
                <div className="card-body">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={text}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        required
                        style={input}
                      />

                      {formik.touched.email && formik.errors.email ? (
                        <span className="form-text text-danger fw-900 fs-7">
                          {formik.errors.email}
                        </span>
                      ) : null}
                      <br />
                      <label
                        htmlFor="password"
                        className="form-label mt-3"
                        style={text}
                      >
                        Password:
                      </label>
                      <input
                        type="password"
                        name="pass"
                        id="password"
                        className="form-control"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pass}
                        required
                        style={input}
                      />

                      {formik.touched.pass && formik.errors.pass ? (
                        <span className="form-text text-danger">
                          {formik.errors.pass}
                        </span>
                      ) : null}
                      <br />
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary w-100 mt-3"
                      />
                      <Link to="/register"> Register Now ?</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
