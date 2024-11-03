import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Getstarted = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
        <title>Sign Up</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen">
        <div className="grid gap-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
            <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-10 m-2">
              <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center">Sign Up</h1>
              <form action="#" method="post" className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                  <input
                    id="email"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md border-gray-300 rounded-lg w-full focus:scale-105 transition duration-300"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                  <input
                    id="password"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md border-gray-300 rounded-lg w-full focus:scale-105 transition duration-300"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300"
                  type="submit"
                >
                  SIGN UP
                </button>
              </form>

              <div className="flex flex-col mt-4 items-center text-sm">
                <h3>
                  <span className="dark:text-gray-300">Have an account?</span>
                  <a className="text-blue-400 ml-1 hover:underline" href="#">
                    Log In
                  </a>
                </h3>
              </div>

              <div className="flex items-center justify-center mt-5 flex-wrap">
                {['google', 'linkedin', 'github', 'facebook', 'twitter', 'apple'].map((service) => (
                  <button key={service} className="p-2 m-1 shadow-lg rounded-lg hover:scale-105 transition duration-300">
                    <Image
                      src={`https://ucarecdn.com/path-to-icon/${service}.png`}
                      alt={service}
                      width={25}
                      height={25}
                      unoptimized
                    />
                  </button>
                ))}
              </div>

              <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                <p>
                  By signing in, you agree to our{' '}
                  <a href="#" className="text-blue-400 hover:underline">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getstarted;
