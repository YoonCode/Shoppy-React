import React from 'react'

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-4 sm:p-8 mx-2 rounded-2xl text-center text-sm sm:text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand text-lg sm:text-xl md:text-2xl">
        ₩{price}
      </p>
    </div>
  )
}
