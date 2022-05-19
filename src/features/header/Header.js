import React from 'react'
import { useDispatch } from 'react-redux'
import { changeUserName } from '../user/userSlice'
import styled from "styled-components";
import { colors, fontWeight, radius, shadow, text } from '../../styles/theme';

export default function Header() {
    const dispatch = useDispatch()

    return (
        <StyledHeader>
            <Logo>
                InstaCats
            </Logo>
            <StyledInput
                type="text"
                placeholder="Choose a Name"
                onChange={(e) => dispatch(changeUserName(e.target.value))}
            />
        </StyledHeader>
    )
}

const Logo = styled.div`
    ${text['2xl']}
    font-weight: ${fontWeight.bold}
`

const StyledInput = styled.input`
    width: 11rem;
    ${text.base}
    text-color: ${colors.gray700};
    background-color: ${colors.gray200};
    border: none;
    border-radius: ${radius.md}
`

const StyledHeader = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    padding: 0 1.5rem;
    background-color: ${colors.gray50};
    box-shadow: ${shadow.md};
    z-index: 10;

`