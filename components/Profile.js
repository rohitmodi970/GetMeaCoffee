
"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { updateProfile, fetchUser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const { data: session, update } = useSession() // update will update the user details if changed
    const router = useRouter()
    const [form, setForm] = useState({})

    // Memoize getData to avoid re-creating the function on every render
    const getData = useCallback(async () => {
        if (session?.user?.name) {
            let u = await fetchUser(session.user.name)
            setForm(u)
        }
    }, [session?.user?.name])

    useEffect(() => {
        if (!session) {
            router.push('/login') // Redirect to login if no session
        } else {
            getData() // Fetch user data when session is available
        }
    }, [session, router, getData]) // Add all dependencies
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        let a = await updateProfile(e, session.user.name)
        toast('Profile updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                
            />
            {/* Same as */}
            <ToastContainer />
            <div className='container mx-auto py-5 px-6' >
                <h1 className='text-3xl font-bold text-white text-center flex items-center justify-center mt-10'>Welcome to Profile Section</h1>

                <form className='max-w-2xl mx-auto' action={handleSubmit}>
                    <div className="my-2">

                        <label htmlFor="name" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Name</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input for email */}
                    <div className="my-2">

                        <label htmlFor="email" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id='email' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input for username */}
                    <div className="my-2">

                        <label htmlFor="username" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id='username' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input for profilepicture of input type text */}
                    <div className="my-2">

                        <label htmlFor="profilepic" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Profile Picture</label>
                        <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id='profilepic' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input for cover pic */}
                    <div className="my-2">

                        <label htmlFor="coverpic" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Cover Picture</label>
                        <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id='coverpic' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input for razorpay id */}
                    <div className="my-2">

                        <label htmlFor="razorpayid" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Razorpay Id</label>
                        <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id='razorpayid' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    {/* input for razorpay secret */}
                    <div className="my-2">

                        <label htmlFor="razorpaysecret" className="bloack mb-2 text-lg font-medium text-gray-900 dark:text-white">Razorpay Sceret</label>
                        <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id='razorpaysecret' className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>


                    {/* submit button */}
                    <div className="my-6">
                        <button type='submit' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Save</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Profile
