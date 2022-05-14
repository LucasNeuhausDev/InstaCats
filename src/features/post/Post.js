import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../user/userSlice'
import { addComment, addMeow } from './postSlice'

export default function Post({ postData, id }) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    return (
        <div className="grow-0 mx-auto max-w-md rounded-md overflow-hidden shadow-md">
            <div className="relative">
                <img src={postData.url} className="" alt="cat" />
                <button className="absolute bottom-2 right-2 rounded-md p-2 bg-gray-200 hover:bg-orange-200 transition-colors"
                    onClick={() => dispatch(addMeow({ id: id }))}
                >
                    {postData.meows >= 10 ? "😻" : postData.meows >= 5 ? "😸" : "😺"}
                    {postData.meows} Meows
                </button>
            </div>
            <div className="px-2 pt-2">
                {
                    postData.comments.map((comment, i) => {
                        return <div key={i}>
                            <span className="font-bold pr-2">{comment.user}</span>
                            {comment.text}
                        </div>
                    })
                }
            </div>
            <div className="flex justify-end px-2 focus-within:bg-gray-100">
                <input type="text"
                    className="w-full h-22 border-none px-0 my-2 focus:ring-0 bg-inherit"
                    placeholder="enter comment..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            dispatch(addComment({ id, comment: { user, text: input } }))
                            setInput("")
                        }
                    }}
                />
                <button onClick={() => {
                    dispatch(addComment({ id, comment: { user, text: input } }))
                    setInput("")
                }}
                    className="grow-0 w-22 text-right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
