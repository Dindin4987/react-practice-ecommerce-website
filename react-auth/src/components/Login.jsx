import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}

        if(formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "Email is required."
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationErrors.email = "Email is not valid."
        }
    
        if(formData.password === "" || formData.password === null) {
            isvalid = false;
            validationErrors.password = "Password is required."
        } else if(formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "Password length is at least 6 characters."
        }
    
    
    
        axios.get('http://localhost:8000/users')
        .then(result => {
            result.data.map(user => {
                if(user.email === formData.email) {
                    if(user.password === formData.password) {
                        alert("Welcome! Login Successfully!")
                        navigate('/')
                    } else {
                        isvalid = false;
                        validationErrors.password = "Wrong password"
                    }
                } else if(formData.email !== "") {
                    isvalid = false;
                    validationErrors.email = "Wrong email!"
                }
            })
            setErrors(validationErrors)
            setValid(isvalid)
    })
        .catch(err => console.log(err))
    }
    

  return (
    <div>

{
            valid ? <></> :
            <span className="text-danger">
                {errors.email} {errors.password}
            </span>
        }
        <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
          
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            </div>

            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
            />
            </div>

          
          <button type="submit" className="btn btn-primary">
            LogIn
          </button>

          <p>If you don't have an account, please <Link to="/registration">Sign Up!</Link></p>
        </form>
    </div>
  )
}

export default Login