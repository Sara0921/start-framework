import React from 'react'

export default function ErrorMessage({error}) {
  return (
    <>
     <p className="text-red-500 mt-l font-medium">{error}</p>
    </>
  )
}
