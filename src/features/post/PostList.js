import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { selectPost } from './postSlice'


export default function PostList() {
    const posts = useSelector(selectPost)

    return (
        <div className="max-w-[1720px] mx-auto columns-1 sm:columns-2 md:columns-3  xl:columns-4 2xl:columns-5 gap-2 space-y-4 p-2">
            {
                posts.map((post, i) => {
                    return (
                        <Post key={i} postData={post} id={i} />
                    )
                })
            }
        </div>
    )
}
