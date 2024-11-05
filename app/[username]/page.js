import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import User from '@/models/User'
import connectDB from '@/db/connectDb'
const Username = async ({ params }) => {
  // if the username not prsent in the datbase , show a 404 page
  const checkUser=async()=>{
    await connectDB()
    let u = await User.findOne({username: params.username})
    // if (!u) {
    //   return notFound()
    // }
  }
  console.log(params.username)
  await checkUser()
  return (
    <>
      <PaymentPage  username = {params.username}/>
    </>
  )
}

export default Username

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me a Coffee`,
  }
}
// pages/[username].js

export async function generateStaticParams() {
  // Replace this with the usernames or fetch them from your database
  const users = ['user1', 'user2', 'user3']; // Sample usernames
  
  return users.map(username => ({
    username,
  }));
}

// Your main component
export default function UserProfile({ params }) {
  const { username } = params;
  
  return <div>Profile of {username}</div>;
}
