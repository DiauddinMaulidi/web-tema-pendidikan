import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigasi = useNavigate()

  const Login = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      setLoading(true)
      setTimeout(() => {
        navigasi('/')
      }, 1000);
    } catch (error) {
      setMsg(error.response.data.msg);
      setTimeout(() => {
          setMsg("");
      }, 5000);
    }
  }

  return (
    <div>
      <div className="flex fixed bg-gradient-to-r from-[#091057] via-[#024CAA] to-[rgba(0,0,255,0)] bg-cover bg-center w-full h-screen">
          {loading ? (
            <div className="absolute top-0 md:absolute md:bottom-0 md:right-0 md:top-auto m-3">
              <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
          ) : msg && (
              <div className="absolute top-0 md:absolute md:bottom-0 md:right-0 md:top-auto m-3">
                  <Alert>
                      <Terminal className="h-4 w-4" />
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                          {msg}
                      </AlertDescription>
                  </Alert>
              </div>
          )}
        <div className=" w-full ms-20 flex justify-start items-center">
          <div className="w-96">
            <div className="flex flex-row gap-3 pb-4">
              <h1 className="text-3xl font-bold text-[#DBD3D3] my-auto">
                LOGIN
              </h1>
            </div>
            <form className="flex flex-col" onSubmit={Login}>
              <div className="pb-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#DBD3D3]">
                  Email
                </label>
                <div className="relative text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </span>
                  <input type="email" name="email" id="email" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="tes@gmail.com" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="pb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#DBD3D3]">
                  Password
                </label>
                <div className="relative text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M12 8v8"></path>
                      <path d="m8.5 14 7-4"></path>
                      <path d="m8.5 10 7 4"></path>
                    </svg>
                  </span>
                  <input type="password" name="password" id="password" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
                  Login
                </button>
              </div>
              <div className="text-sm font-light text-[#DBD3D3] flex">
                <p>Don&apos;t have an accout yet? </p>
                <a href="/register" className="font-medium text-[#DBD3D3] hover:underline pl-3">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img className="h-screen" src="./img/download.jpeg" alt="bg pendidikan" />
      </div>
    </div>
  );
}

export default Login;
