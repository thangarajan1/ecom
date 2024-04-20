import { useFormik } from "formik";
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img from "./LoginBG/3.jpg"


const validate = (values)=>{
var errors ={}

if (!values.fname) {
  errors.fname = "*Required FirstName";
} 
if (!values.lname) {
  errors.lname = "*Required FirstName";
} 
 if (!values.email) {
   errors.email = "*Required FirstName";
 } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
   errors.email = "*Invalid Email";
 }
 if (!values.pass) {
   errors.pass = "*Required FirstName";
 } else if (values.pass.length > 8) {
   errors.pass = "*Must be 8 Charactors Only Allowed";
 } else if (values.pass.length < 4) {
   errors.pass = "*More  then 5 Charactors Only Allowed";
 }
 if (!values.cpass) {
   errors.cpass = "*Required FirstName";
 } else if (values.pass !== values.cpass) {
   errors.password = "*Must be 8 Charactors Only Allowed";
 }

 return errors;

}

export default function Register() {

// const { setCheckReg } = useContext(cartContext);





const formik = useFormik({
    initialValues:{
        fname:"",
        lname:"",
        email:"",
        pass:"",
        cpass:"",
    },
    validate,
})





const fname = formik.values.fname;
const lname = formik.values.lname;
const email = formik.values.email;
const pass = formik.values.pass;
const cpass = formik.values.cpass;
const Navigate = useNavigate()

const handleSubmit =(e)=>{
  e.preventDefault();

  axios
    .post("http://localhost:8000/register", { fname, lname, email, pass, cpass })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    Navigate("/login")
  }

const style ={
width:"100%",
height:"610px"
}

const style1 ={
  position:"absolute",
  top:"-8%",
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
        <div style={style}>
          <img src={img} width={"100%"} height={"100%"} alt="" />
          <div className="container mt-3" style={style1}>
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <form action="" onSubmit={handleSubmit}>
                  <div className="card" style={style2}>
                    <div className="card-body">
                      <div className="form-group">
                        <label
                          htmlFor="fname"
                          className="form-label"
                          style={text}
                        >
                          First Name :
                        </label>
                        <input
                          type="text"
                          name="fname"
                          className="form-control"
                          id="fname"
                          autoComplete="off"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fname}
                          required
                          style={input}
                        />

                        {formik.touched.fname && formik.errors.fname ? (
                          <span className="form-text text-danger">
                            {formik.errors.fname}
                          </span>
                        ) : null}
                        <br />
                        <label
                          htmlFor="lname"
                          className="form-label"
                          style={text}
                        >
                          Last Name :
                        </label>
                        <input
                          type="text"
                          name="lname"
                          className="form-control"
                          id="lname"
                          autoComplete="off"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lname}
                          required
                          style={input}
                        />

                        {formik.touched.lname && formik.errors.lname ? (
                          <span className="form-text text-danger">
                            {formik.errors.lname}
                          </span>
                        ) : null}
                        <br />

                        <label
                          htmlFor="email"
                          className="form-label"
                          style={text}
                        >
                          Email :
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          autoComplete="off"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          required
                          style={input}
                        />

                        {formik.touched.email && formik.errors.email ? (
                          <span className="form-text text-danger">
                            {formik.errors.email}
                          </span>
                        ) : null}
                        <br />
                        <label
                          htmlFor="pass"
                          className="form-label"
                          style={text}
                        >
                          Password :
                        </label>
                        <input
                          type="password"
                          name="pass"
                          className="form-control"
                          id="pass"
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
                        <label
                          htmlFor="cpass"
                          className="form-label"
                          style={text}
                        >
                          Conform Password:
                        </label>
                        <input
                          type="password"
                          name="cpass"
                          className="form-control"
                          id="cpass"
                          autoComplete="off"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cpass}
                          required
                          style={input}
                        />

                        {formik.touched.cpass && formik.errors.cpass ? (
                          <span className="form-text text-danger">
                            {formik.errors.cpass}
                          </span>
                        ) : null}
                    
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-primary w-100 mt-3"
                        />
                        <Link to="/login">Login Now ?</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
