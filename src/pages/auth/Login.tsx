import { useState,} from "react"
import { Eye, EyeOff } from "lucide-react"
import { assets } from "@/assets/assets"
import { useNavigate } from "react-router-dom"
import { DUMMY_ADMIN, DUMMY_USER } from "@/data/dummyUser"

type ErrorType = {
  email?: string
  password?: string
}



const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError] = useState<ErrorType>({})

  const navigate = useNavigate();
  
const handleLogin = (e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()

  const newErrors:ErrorType = {}

  if (!email) {
    newErrors.email = "Email is required"
  } else if (!validateEmail(email)) {
    newErrors.email = "Enter a valid email"
  }

  if (!password) {
    newErrors.password = "Password is required"
  }

  if (Object.keys(newErrors).length > 0) {
    setError(newErrors)
    return
  }

  if (
    (email === DUMMY_USER.email && password === DUMMY_USER.password) ||
    (email === DUMMY_ADMIN.email && password === DUMMY_ADMIN.password)
  ) {
    localStorage.setItem("isAuth", "true")
    localStorage.setItem("user", JSON.stringify(DUMMY_USER))
    navigate("/dashboard")
  } else {
    alert("Invalid email or password")
  }
}

const validateEmail = (email:string):boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

  return (
    <div className="flex min-h-screen bg-black">

      <div className="w-full md:w-[40%] flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          
          <img
            src={assets.logo1}
            className="h-14 mx-auto mb-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            alt="Royal Mega"
          />

          <div className="space-y-5 text-white">

            <div>
              <label className="text-xs text-gray-400">
                Email or mobile *
              </label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-full bg-gray-200 text-black"
                placeholder="Enter your email"
              />
              {error.email && (
                <p className="text-red-500 text-xs mt-1">{error.email}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Password *</span>
                <span className="text-red-500 cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              <div className="relative mt-2">
                <input
                 required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-gray-200 text-black pr-12"
                  placeholder="Enter your password"
                />
                {error.password && (
  <p className="text-red-500 text-xs mt-1">{error.password}</p>
)}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>


            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-full font-bold text-black bg-linear-to-r from-[#E3BA5D] via-[#FFDEAC] to-[#D4AC54] shadow-lg hover:scale-105 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-400">
              Not registered yet?{" "}
              <span onClick={() => navigate("/register")}
               className="text-yellow-400 cursor-pointer">
                Create an Account
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

        <div className="absolute top-20 left-16 text-white max-w-md z-10">
          
          <div className="bg-black/70 backdrop-blur-md px-5 py-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back,
            </h1>

            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login