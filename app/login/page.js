"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const Login = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        document.title = "Login - Get ME a Coffee"
        if (session) {
            router.push('/profile')//when logged in redirect to profile page
        }
    
      
    }, [router,session])
    
    
    return (
        <div className='text-white py-14 container mx-auto'>
            <h1 className='font-bold text-3xl text-center text-white'>Login to Get Started</h1>
            <div className="flex flex-col gap-2 min-h-screen items-center justify-center p-10">


                <button onClick={()=>{signIn("google")}}
                    className=" bg-slate-50 w-80 rounded-lg shadow-md max-w-xs px-6 py-4 font-bold text-black items-center flex gap-5  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <span className='w-6'><img src="/google-icon.svg" alt="" /></span>
                    <span>Continue with Google</span>
                </button>

                


                <button onClick={()=>{signIn("github")}}
                    className=" bg-slate-50 w-80 rounded-lg shadow-md max-w-xs px-6 py-4 font-bold text-black items-center flex gap-5  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <span className='w-6'><img src="/github-icon.svg" alt="" /></span>

                    <span>Continue with Github</span>
                </button>


                


            </div>
        </div>
    )
}

export default Login
