import { useState } from "react"
import { ArrowRightCircle, Eye, EyeOff } from "lucide-react"
import { assets } from "@/assets/assets"
import {useNavigate } from "react-router-dom"

type ErrorType = {
  firstName?: string
  lastName?: string
  userName?: string
  email?: any
  password?: string
  agree?: string
  ageConfirm?: string
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    agree: false,
    ageConfirm:false,
  })
  const navigate = useNavigate()
  const [error,setError] = useState<ErrorType>({})

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
    ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }
  const validateEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[1-9]\d{9}$/  // Indian mobile number

  return emailRegex.test(value) || phoneRegex.test(value)
}

  const handleRegister = () => {
    setError({})
  const newErrors: ErrorType = {}

  if (!form.firstName) {
    newErrors.firstName = "First name is required"
  }

  if (!form.lastName) {
    newErrors.lastName = "Last name is required"
  }

  if(!form.userName){
    newErrors.userName = "User name is required"
  }

  if (!form.email) {
    newErrors.email = "Email is required or mobile"
  } else if (!validateEmail(form.email)) {
    newErrors.email = "Enter valid email or mobile"
  }

  if (!form.password) {
    newErrors.password = "Password is required"
  } 

  if (!form.agree) {
    newErrors.agree = "Accept terms"
  }

  if(!form.ageConfirm){
    newErrors.ageConfirm = "must be 18+"
  }

  if (Object.keys(newErrors).length > 0) {
    setError(newErrors)
    return
  }

  console.log("Register Data:", form)
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
  <div className="w-1/2">
    <p className=" mb-1">First name*</p>
    <input
      name="firstName"
      value={form.firstName}
      onChange={handleChange}
      className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black"
      placeholder="First name"
    />
    {error.firstName && (
      <p className="text-red-500 text-xs mt-1">{error.firstName}</p>
    )} 
  </div>

  <div className="w-1/2">
    <p className=" mb-1">Last name*</p>
    <input
      name="lastName"
      value={form.lastName}
      onChange={handleChange}
      className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black"
      placeholder="Last name"
    />
     {error.lastName && (
      <p className="text-red-500 text-xs mt-1">{error.lastName}</p>
    )} 
  </div>
</div>
            <div>
              <p>Username*</p>
            <input
              name="userName"
              value={form.userName}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black"
            />
            {error.userName && (
      <p className="text-red-500 text-xs">{error.userName}</p>
    )} 
    </div>

            <div className="relative">
              <p>Email or mobile*</p>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email or mobile"
                className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black pr-16"
              />
              {error.email && (
      <p className="text-red-500 text-xs mt-1">{error.email}</p>
    )} 
              <button className="absolute flex flex-row font-bold right-0 top-11.5 -translate-y-1/2 text-xs bg-gray-300 px-3 py-3.5 rounded-full text-black">
                OTP <ArrowRightCircle className="ml-1" size={15}/>
              </button>
            </div>

            <div className="relative">
              <p>Password*</p>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-full bg-gray-200 text-black pr-12"
              />
              {error.password && (
      <p className="text-red-500 text-xs mt-1">{error.password}</p>
    )} 
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >

                {showPassword ? <EyeOff size={16} className="mt-5" /> : <Eye size={16} className="mt-5" />}
              </button>
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.agree}
                  name="agree"
                  onChange={handleChange}
                />
              
                I accept Terms of Use & Privacy Policy
              </label>
                {error.agree && (
  <p className="text-red-500 text-xs">{error.agree}</p>
)}

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.ageConfirm}
                  name="ageConfirm"
                  onChange={handleChange}
                />
                I am 18 year old 
              </label>
              {error.ageConfirm && (
  <p className="text-red-500 text-xs">{error.ageConfirm}</p>
)}

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
         <div
              className="absolute left-30 top-50 w-[50%] h-full  opacity-80 pointer-events-none"
              style={{
                backgroundImage: `url(${assets.register})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
      </div>
    </div>
  )
}

export default Register