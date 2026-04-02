import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { assets } from "@/assets/assets"
import {useNavigate } from "react-router-dom"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    agree: false,
  })
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleRegister = () => {
    if (!form.firstName || !form.email || !form.password) {
      alert("Please fill required fields")
      return
    }

    if (!form.agree) {
      alert("Please accept terms")
      return
    }

    console.log("Register Data:", form)

    // 👉 API call yaha lagao
  }

  return (
    <div className="flex min-h-screen bg-black">

      <div className="w-full md:w-[40%] flex items-center justify-center px-6">
        <div className="w-full max-w-md text-white">

          <img
            src={assets.logo1}
            className="h-12 mb-6"
            alt="Royal Mega"
          />

          <h2 className="text-xl font-semibold mb-1">
            Create an account
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="space-y-4">

            <div className="flex gap-3">
              <input
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
                className="w-1/2 px-4 py-2.5 rounded-full bg-gray-200 text-black"
              />
              <input
                name="lastName"
                onChange={handleChange}
                placeholder="Last name"
                className="w-1/2 px-4 py-2.5 rounded-full bg-gray-200 text-black"
              />
            </div>

            <input
              name="username"
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black"
            />

            <div className="relative">
              <input
                name="email"
                onChange={handleChange}
                placeholder="Enter your email or mobile"
                className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black pr-16"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-xs bg-gray-300 px-3 py-1 rounded-full text-black">
                OTP
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  onChange={handleChange}
                />
                I accept Terms of Use & Privacy Policy
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  onChange={handleChange}
                />
                I am 18 year old 
              </label>

            </div>

            <button
              onClick={handleRegister}
              className="w-full py-2.5 rounded-full font-bold text-black bg-linear-to-r from-[#E3BA5D] via-[#FFDEAC] to-[#D4AC54] shadow-lg hover:scale-105 transition"
            >
              Create account
            </button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")} 
              className="text-yellow-400 cursor-pointer">
                Login
              </span>
            </p>

          </div>
        </div>
      </div>

      <div className="hidden md:flex w-[60%] relative overflow-hidden">

        <img
          src={assets.Login}
          alt="casino"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-16 left-16 text-white max-w-md z-10">

          <h1 className="text-2xl font-bold mb-4">
            Welcome to Royal Mega Limited!
          </h1>

          <p className="bg-black/70 backdrop-blur-md px-4 py-3 rounded-lg text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register