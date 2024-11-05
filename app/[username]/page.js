import React from 'react';
import PaymentPage from '@/components/PaymentPage';
import { notFound } from 'next/navigation';
import User from '@/models/User';
import connectDB from '@/db/connectDb';

const Username = async ({ params }) => {
  // Connect to the database and check if the username exists
  const checkUser = async () => {
    await connectDB();
    let user = await User.findOne({ username: params.username });
    if (!user) {
      return notFound(); // Show a 404 page if user is not found
    }
  };

  console.log(params.username);
  await checkUser();

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me a Coffee`,
  };
}

// Generate static params for static export
export async function generateStaticParams() {
  // Connect to the database
  await connectDB();
  
  // Fetch all usernames from the database
  const users = await User.find({}, 'username'); // Only fetch the username field
  
  // Map usernames to the format required for static paths
  return users.map(user => ({
    username: user.username,
  }));
}
