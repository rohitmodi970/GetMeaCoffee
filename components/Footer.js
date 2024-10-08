import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-slate-900 text-white flex justify-center px-4 h-16 items-center'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Coffee -All rights reserved! </p>
    </footer>
  )
}

export default Footer
