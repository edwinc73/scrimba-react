import {React, useState} from "react"
import "./Form.css"

export default function Form(){
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newsletter: false
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(!regex.test(formData.email)){
      alert("Email is invalid")
    }

    if(e.target[2].value == formData.password){
      console.log(formData)
    } else {
      alert("Password not the same")
    }
  }

  const updateFormData = (e) =>{
    setFormData(prev => {
      const {name, type, value} = e.target
      return (
        type == "checkbox" ?
        { ...prev, newsletter: !prev.newsletter } :
        { ...prev, [name]: value }
      )
    })
  }

  const {email, password, newsletter} = formData
  return(
    <>
      <div className="row form-container rounded">
        <form onSubmit={handleSubmit} className="d-flex w-100 flex-column">
          <input
            className="rounded border border-secondary w-100"
            type="text"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={updateFormData}
            />
            <input
              className="rounded border border-secondary w-100"
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={updateFormData}
            />
            <input
              className="rounded border border-secondary w-100"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            />
            <div className="d-flex w-100 newsletter">
              <input
              type="checkBox"
              name="newsletter"
              onChange={updateFormData}
              checked={newsletter}
              />
               <label for="newsletter">I want to join the newsletter</label>
            </div>
            <button className="rounded btn btn-primary">Sign up</button>
        </form>
      </div>
    </>
  )
}
