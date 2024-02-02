"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const CheckoutIcon = () => {
  const { data: session } = useSession();
  const createCheckOutSession = async () => {
    if (!session) return;
   }

  return (
    <button className='mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80'>
      Sign Up
    </button>
  )
}

export default CheckoutIcon
