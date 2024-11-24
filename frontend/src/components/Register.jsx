import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const navigasi = useNavigate()

    const Register = async (e) => {
        e.preventDefault()
        try {
            const newData = await axios.post("http://11.16.16.251:8000/register", {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
            })
            alert(newData.data)
            navigasi("/login")
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
        <div className="w-full flex justify-center">
                {msg && (
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
                REGISTER
              </h1>
            </div>
            <form className="flex flex-col" onSubmit={Register}>
            <div className="pb-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#DBD3D3]">
                  Name
                </label>
                <div className="relative text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>

                  </span>
                  <input type="name" name="name" id="name" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="maulidi" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
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
              <div className="">
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
              <div className="pb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#DBD3D3]">
                  Confirm Password
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
                  <input type="password" name="password" id="password" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
                  Create Account
                </button>
              </div>
              <div className="text-sm font-light text-[#DBD3D3] flex">
                <p>Have an accout yet? </p>
                <a href="/login" className="font-medium text-[#DBD3D3] hover:underline pl-3">
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
        <div className="flex justify-end">
        <img className="h-screen" src="./img/download.jpeg" alt="bg pendidikan" />
      </div>
    </div>
  )
}

export default Register
