import React from 'react'
import { useDispatch } from 'react-redux'
import { changeUserName } from '../user/userSlice'

export default function Header() {
    const dispatch = useDispatch()

    return (
        <header className="sticky top-0 flex flex-row items-center justify-between w-full h-20 px-6 bg-gray-50 shadow-md z-10">
            <div className="text-2xl font-bold">
                InstaCats
            </div>
            <input type="text"
                className="w-44 text-base text-gray-700 bg-gray-200 border-none rounded-md"
                placeholder="Choose a Name"
                onChange={(e) => dispatch(changeUserName(e.target.value))}
            />
        </header>
    )
}
