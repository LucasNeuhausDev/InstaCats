import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../user/userSlice'
import { addComment, addMeow, setPostLoaded } from './postSlice'
import styled from "styled-components"
import { colors, fontWeight, radius, shadow } from '../../styles/theme'


export default function Post({ postData, id }) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    return (
        <PostWrapper>
            <ImgWrapper>
                <img src={postData.url} alt="cat" onLoad={() => dispatch(setPostLoaded({ id }))} />
                <MeowButton
                    onClick={() => dispatch(addMeow({ id: id }))}
                >
                    {postData.meows >= 10 ? "😻" : postData.meows >= 5 ? "😸" : "😺"}
                    {postData.meows} Meows
                </MeowButton>
            </ImgWrapper>
            <CommentList>
                {
                    postData.comments.map((comment, i) => {
                        return <div key={i}>
                            <CommentUser>{comment.user}</CommentUser>
                            {comment.text}
                        </div>
                    })
                }
            </CommentList>
            <CommentInputWrapper>
                <CommentInput type="text"
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
                <CommentButton onClick={() => {
                    dispatch(addComment({ id, comment: { user, text: input } }))
                    setInput("")
                }}
                >
                    <CommentButtonIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </CommentButtonIcon>
                </CommentButton>
            </CommentInputWrapper>
        </PostWrapper>
    )
}

const CommentList = styled.div`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
`

const CommentUser = styled.span`
    padding-right: 0.5rem;
    font-weight: ${fontWeight.bold}
`

const CommentButtonIcon = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
    transform: rotate(90deg);
    `

const CommentButton = styled.button`
    flex-grow: 0;
    text-align: right;
`

const CommentInput = styled.input`
    width: 100%;
    border-style: none;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: inherit;
    cursor: pointer;
`

const CommentInputWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:focus-within {
        background-color: ${colors.gray100}
    }
`

const ImgWrapper = styled.div`
    position: relative;
`

const MeowButton = styled.button`
    position: absolute;
    bottom: 0.75rem;
    right: 0.5rem;
    border-radius: ${radius.md};
    padding: 0.5rem;
    background-color: ${colors.gray200};

    &:hover {
        background-color: ${colors.orange200};
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
`

const PostWrapper = styled.div`
    flex-grow: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 28rem;
    border-radius: ${radius.md};
    overflow: hidden;
    box-shadow: ${shadow.md};
    
    margin-top: 1rem;

    &:first-child {
        margin-top: 0;
    }
`