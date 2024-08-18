import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}
    if(formData.fname === "" || formData.fname === null) {
        isvalid = false;
        validationErrors.fname = "First name is required"
    }
    if(formData.lname === "" || formData.lname === null) {
        isvalid = false;
        validationErrors.lname = "Last name is required"
    }
    if(formData.email === "" || formData.email === null) {
        isvalid = false;
        validationErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
        isvalid = false;
        validationErrors.email = "Email is not valid"
    }

    if(formData.password === "" || formData.password === null) {
        isvalid = false;
        validationErrors.password = "Password is required"
    } else if(formData.password.length < 6) {
        isvalid = false;
        validationErrors.password = "Password length is at least 6 characters"
    }

    if(formData.cpassword !== formData.password) {
        isvalid = false;
        validationErrors.cpassword = "Confirm passwod did not match with password"
}
setErrors(validationErrors)
setValid(isvalid)

if(Object.keys(validationErrors).length === 0) {
    axios.post('http://localhost:8000/users', formData)
    .then(result => {
        alert("Registered Successfully!")
        navigate('/login')
})
    .catch(err => console.log(err))
}

  }
  return (
    <div>
      <h3>Create Your Account</h3>
      <div>
        {
            valid ? <></> :
            <span className="text-danger">
                {errors.fname} {errors.lname} {errors.email} {errors.password} {errors.cpassword}
            </span>
        }
        <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="name"
              className="form-control"
              onChange={(e) => setFormData({...formData, fname: e.target.value})} />

            </div>

            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="name"
              className="form-control"
              onChange={(e) => setFormData({...formData, lname: e.target.value})} />
            </div>

            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setFormData({...formData, cpassword: e.target.value})} />
          </div>

          <div id="emailHelp" className="form-text">
              We'll never share your information with anyone else.
        </div>
         
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>

          <p>If you already have an account, please <Link to="/login">login now!</Link></p>
        </form>
      </div>
      
    </div>
  );
};


export default Registration

