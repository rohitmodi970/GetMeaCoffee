"use client"
import React from 'react'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { fetchUser, fetchPayment, initiate } from '@/actions/useractions'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {

    // const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({name: "",message:"",amount:""})
    const [currentuser, setCurrentuser] = useState({})
    const [pacares, setPacares] = useState([])//payment word comes from latin word paycare
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()


    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {

            toast('Thanks for your donation!', {
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
        router.push(`/${username}`)
    }, [])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
        // console.log(paymentform)
    }
    const getData = async () => {
        let u = await fetchUser(username)
        setCurrentuser(u)
        let dbpayments = await fetchPayment(username)
        setPacares(dbpayments)
        console.log(dbpayments)
    }
    const pay = async (amount) => {
        //Get the order ID
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me a Coffee", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
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
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative  flex justify-center items-center '>
                <img className='object-fill w-full h-56 md:h-[50vh]' src={currentuser.coverpic} alt="" />
                <div className="absolute -bottom-14 flex justify-center items-center  border-2 border-white rounded-full size-32 overflow-hidden">
                    <img className='rounded-full object-cover size-32' width={150} height={150} src={currentuser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex flex-col  justify-center items-center my-24 mb-32  gap-2">
                <div className="font-bold text-xl">@{username}</div>
                <div className="text-slate-400 font-semibold">Lets help {username} get a coffee!</div>
                <div className="text-slate-400 font-semibold">{pacares.length} Payments .  ₹{pacares.reduce((a,b)=> a+b.amount , 0)} raised</div>
                <div className="payments flex gap-3 w-[80%] text-white mt-11 flex-col md:flex-row">
                    <div className="supporters md:w-1/2 w-full bg-slate-900 rounded-lg p-10">
                        {/* Show list of supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold  my-5'>Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg flex flex-col gap-2'>
                            {pacares && pacares.length > 0 ? (
                                pacares.map((p, i) => (
                                    <li key={i} className="my-2 flex items-center">
                                        <img width={35} src="/user.gif" alt="user" />
                                        <span>{p.name} donated <span className="font-bold">₹{p.amount}</span> with a message "{p.message}"</span>
                                    </li>
                                ))
                            ) : (
                                <p>No donations found</p>
                            )}

                        </ul>
                    </div>
                    <div className="makePayment md:w-1/2 w-full bg-slate-900 rounded-lg p-10">
                        <h2 className='text-2xl font-bold  my-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <div className="">
                                <input onChange={handleChange} value={paymentform.name} type="text" name='name' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} type="text" name='message' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} className='w-full p-3 rounded-lg bg-slate-800' type="text" name='amount' placeholder='Enter Amount' />
                            <button
                                onClick={() => {
                                    if (!paymentform.amount || isNaN(paymentform.amount)) {
                                        alert("Please enter a valid amount");
                                        return;
                                    }
                                    pay(Number.parseInt(paymentform.amount) * 100);
                                }} type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:to-blue-900 disabled:from-purple-200" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3}>
                                Pay
                            </button>
                        </div>
                        {/* Or choose from these amounts */}
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage
