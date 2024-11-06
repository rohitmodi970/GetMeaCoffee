"use client";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { searchUser, fetchPayment, initiate } from "@/actions/useractions";
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from "next/router";

const Navbar = () => {

    const { data: session } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchForm, setSearchForm] = useState({ query: "" });
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter()
    const [hasSignedOut, setHasSignedOut] = useState(false);
    const handleDropdownBlur = () => {
        setTimeout(() => setShowDropdown(false), 100);
    };


    // Debounce function to limit search requests
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };
    const handleSearch = debounce(async (query) => {
        if (!query) {
            setSearchResults([]);
            return;
        }
        const results = await searchUser(query);
        setSearchResults(results);
    }, 300); // Adjust delay as needed (300ms)

    //     useEffect(() => {
    //         const handleSignOut = async () => {
    //           const isSignedOut = await signOut(); // Ensure signOut() is asynchronous, if necessary
    //           if (isSignedOut) {
    //             toast("Thanks for your donation!", {
    //               position: "top-right",
    //               autoClose: 5000,
    //               hideProgressBar: false,
    //               closeOnClick: true,
    //               pauseOnHover: true,
    //               draggable: true,
    //               progress: undefined,
    //               theme: "dark",
    //   transition: Bounce,
    //             });

    //             router.push("http://localhost:3000");
    //           }
    //         };
    //         handleSignOut();
    //   }, [hasSignedOut, router]);

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
            <nav className="bg-slate-900 text-white flex justify-between flex-col px-4 md:h-16 md:flex-row items-center">
                <Link href="/" className="logo font-bold text-xl flex justify-center items-center">
                    <span>
                        <img width={45} src="/coffee.gif" alt="logo" />
                    </span>
                    <span className="text-2xl md:text-base my-3 md:my-0">GetMeaCoffee!</span>
                </Link>

                <Link href="https://get-mea-coffee-jzpq.vercel.app/">
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Home
                    </button>
                </Link>

                {!session && (
                    <form className="max-w-md">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                <lord-icon
                                    src="https://cdn.lordicon.com/ewoezmtb.json"
                                    trigger="loop"
                                    delay="2000"
                                    state="hover-rotation"
                                >
                                </lord-icon>
                            </div>
                            <input
                                className="w-[240px] p-3 ps-10 text-sm text-purple-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                type="search"
                                placeholder="Search Users by Name or Email"
                                value={searchForm.query || ""}
                                onChange={(e) => {
                                    const query = e.target.value;
                                    setSearchForm({ ...searchForm, query });
                                    handleSearch(query);
                                }}
                            />
                        </div>
                        {searchForm.query && searchResults.length > 0 && (
                            <div className="absolute z-10 rounded-lg bg-gray-900">
                                <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 ">
                                    {searchResults.map((user) => (
                                        <li key={user._id} className="pb-3 sm:pb-4 hover:rounded-2xl hover:bg-gray-800">
                                            <div className="flex items-center space-x-4 rtl:space-x-reverse p-2 cursor-default">
                                                <img className="w-8 h-8 pt-1 rounded-full" src={user.profilepic} alt={`${user.name} profile`} />
                                                <div className="flex-1 min-w-0">

                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white "><Link href={`/${user.username}`}>{user.name}</Link></p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </form>
                )}




                <div className="relative flex flex-col md:block gap-4">
                    {session ? (
                        <>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                onBlur={handleDropdownBlur}
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                            >
                                Welcome {session.user.email}
                                <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`z-10 ${showDropdown ? "" : "hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li><Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Profile</Link></li>
                                    <li><Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Your Page</Link></li>
                                    <li><Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Sign Out</Link></li>
                                </ul>
                            </div>

                            <button onClick={() => signOut()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login">
                            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                Get Started
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
