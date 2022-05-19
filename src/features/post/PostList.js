import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { selectPost, selectIsLoaded } from './postSlice'
import styled from "styled-components"
import { breakpoint, colors, text } from '../../styles/theme'


export default function PostList() {
    const { posts } = useSelector(selectPost)
    const isLoaded = useSelector(selectIsLoaded)

    return (
        <>
            {!isLoaded &&
                <LoadingWrapper>
                    <LoadingSpinner xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </LoadingSpinner>
                    <LoadingText>
                        Loading Cats...
                    </LoadingText>
                </LoadingWrapper>
            }

            <StyledPostList isLoaded={isLoaded}>
                {
                    posts.map((post, i) => {
                        return (
                            <Post key={i} postData={post} id={i} />
                        )
                    })
                }
            </StyledPostList>
        </>
    )
}
const LoadingSpinner = styled.svg`
    height: 11rem;
    height: 11rem;
    stroke: ${colors.gray200};

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    animation: spin 1s ease-in-out infinite reverse;    
`


const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

const LoadingText = styled.span`#
    text-color: ${colors.gray500};
    ${text.xl}
`


const StyledPostList = styled.div`
    display: ${props => props.isLoaded ? "block" : "none"};
    max-width: 1720px;
    margin: 0 auto;
    columns: 1;
    gap: 0.5rem;
    padding: 0.5rem;

    @media ${breakpoint.sm} { columns: 2; }
    @media ${breakpoint.md} { columns: 3; }
    @media ${breakpoint.xl} { columns: 4; }
    @media ${breakpoint["2xl"]} { columns: 5; }
`
