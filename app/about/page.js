import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <>
            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-3xl font-bold mb-4'>About Get Me a Coffee</h1>
                <p className="text-lg mb-6">
                    Get Me a Coffee a is a platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endevors by buying a coffee. Unlock the potential of your fanbase and bring your passion to life.
                </p>
                <h2 className='text-2xl font-semibold mb-4'>How It works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-center mb-6">
                        <Image className='w-20 h-20 rounded-full mr-4' src="/coin.gif" alt="Fans want to colaborate" />
                        <div className="">
                            <h3 className="text-2xl font-semibold mb-4">Fans want to colaborate</h3>
                            <p>Your Fans are enthusiastic about collaborating with you on your projects.</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <Image className='w-20 h-20 rounded-full mr-4' src="/demand.gif" alt="Fans want to colaborate" />
                        <div className="">
                            <h3 className="text-2xl font-semibold mb-4">Support through coffee</h3>
                            <p>Receive support from your fans in the form of Coffee purchases, directly contributing to your project funding.</p>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between items-center gap-10">

                <ul className="list-disc pl-6 mb-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Benefits of creators</h2>
                    <li className="mb-2">Direct financial support from your fanbase.</li>
                    <li className="mb-2">Engage with your fans on a personal level.</li>
                    <li className="mb-2">Access to a platform tailored for creative projects.</li>
                </ul>
                <ul className="list-disc pl-6 mb-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Benefits of Fans</h2>
                    <li className="mb-2">Direct contribute to the success of your favorite creators.</li>
                    <li className="mb-2">Exclusive Rewards and perks for supporting creators.</li>
                    <li className="mb-2">Be part of the creative process and connect with creators.</li>
                </ul>
                </div>
                <div className="flex justify-between items-center gap-10">

                <ul className="list-disc pl-6 mb-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Benefits of Collaboration</h2>
                    <li className="mb-2">Unlock a new opportunities through Collaboration with fellow creators.</li>
                    <li className="mb-2">Expand your network and reach a wider audience.</li>
                    <li className="mb-2">Combine skills and resources to create innovative projects.</li>
                </ul>

                <ul className="list-disc pl-6 mb-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
                    <li className="mb-2">Connect with a supportive of like-minded individuals.</li>
                    <li className="mb-2">Give valuable feedback and encouragement from peers.</li>
                    <li className="mb-2">Participate in discussion and events centered around your interests.</li>
                </ul>
                </div>
                <div className="flex justify-between items-center gap-10">

                <ul className="list-disc pl-6 mb-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Access to resources</h2>
                    <li className="mb-2">Gain Access to resources such as tutorials, templates and tools.</li>
                    <li className="mb-2">Receive guidance and membership from experienced creators.</li>
                    <li className="mb-2">Stay updated on industry trends and best practices.</li>
                </ul>
                <ul className="list-disc pl-6 mb-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Recognition and Exposures</h2>
                    <li className="mb-2">Showcase your work to a global audience and gain recognition.</li>
                    <li className="mb-2">Build your protfolio and increase your creativity as a creator.</li>
                    <li className="mb-2">Feature in promotional materials and compaigns.</li>
                </ul>
                </div>
                <div className="flex  items-center gap-10">

                <ul className=" list-disc pl-6 mb-6 flex flex-col">
                <h2 className="  text-2xl font-semibold mb-4 ">Supportive Community</h2>
                    <li className="mb-2 ">Community that values creativity,diversity and inclusivity.</li>
                    <li className="mb-2 ">Encouragement and inpiration from fellow members.</li>
                    <li className="mb-2 ">Coloborate on projects and share resources for mutual growth.</li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default page
export const metadata ={
    title:"About - Get Me a Coffee"
}