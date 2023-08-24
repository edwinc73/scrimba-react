import {React, useState} from "react"
import "./Form.css"

export default function Form(){
  const [formData, setFormData] = useState({
    email: "",
    password: ""
    newsletter
  })
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Email address"
      />
        <input
        type="text"
        name="email"
        value={email}
        placeholder="Email address"
      />

    </form>
  )
}
