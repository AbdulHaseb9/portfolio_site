import React from 'react'

export default function Button({ title, margin }) {
    return (
        <button className={`bg-primary text-white px-4 py-2 rounded-md my-3 border-primary border-2 hover:bg-transparent hover:text-primary ${margin}`}>{title}</button>
    )
}
