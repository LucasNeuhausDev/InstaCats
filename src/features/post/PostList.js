import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { selectPost, selectIsLoaded } from './postSlice'


export default function PostList() {
    const { posts } = useSelector(selectPost)
    const isLoaded = useSelector(selectIsLoaded)

    return (
        <>
            {!isLoaded &&
                <div className="flex flex-col justify-center items-center pt-48 w-full mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-44 w-44 text-gray-200 animate-[spin_1s_ease-in-out_infinite_reverse]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-gray-500 text-xl animate-pulse">
                        Loading Cats...
                    </span>
                </div>
            }

            <div className={`max-w-[1720px] mx-auto columns-1 sm:columns-2 md:columns-3  xl:columns-4 2xl:columns-5 gap-2 space-y-4 p-2 ${isLoaded ? "block" : "hidden"} `}>
                {
                    posts.map((post, i) => {
                        return (
                            <Post key={i} postData={post} id={i} />
                        )
                    })
                }
            </div>
        </>
    )
}
