import React from "react"
import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
const Signin = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({})
  const [loading, SetLoading] = useState(false)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      SetLoading(true)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      if (data.success === false) {
        SetLoading(false)
        
        return;
      }
      SetLoading(false)
      navigate('/')
    } catch (error) {
      SetLoading(false)
        
      
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 mx-4">Sign Up</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        
        <input
          type="text"
          className="border p-3 rounded "
          onChange={handleChange}
          id="email"
          placeholder="email"
        />
        <input
          type="text"
          className="border p-3 rounded "
          onChange={handleChange}
          id="password"
          placeholder="password"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded  "
        >
          {loading ? "Loading ..." : "SIGN IN"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account ?</p>
        <Link to={'/signup'}>
          <span className="text-blue-800">Sign up</span>
        </Link>
      </div>
    </div>
  )
}

export default Signin
