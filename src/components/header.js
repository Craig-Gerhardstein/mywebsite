import React from 'react';
import styled, {keyframes} from 'styled-components'
import {bounceInDown, bounceInLeft, bounceInRight, bounceInUp} from "animate.css";

export default function Header( props ) {
    return(
        <NavContainer>
            
            <NavDiv>
                <NavLinks1 href="index.html">Home</NavLinks1>
                <NavLinks2 href="about.html">About</NavLinks2>
                <NavLinks3 href="contact.html">Contact</NavLinks3>
                <NavLinks4 href="Projects.html">Projects</NavLinks4>

            </NavDiv>
            <HeaderStyled>Craig Gerhardstein</HeaderStyled>
        </NavContainer>

    )
}

const NavContainer = styled.div `
background-color: #393e46;
display:flex;
flex-direction: column;

`
const NavDiv = styled.div `
display:flex;
justify-content: center;
`
const NavLinks1 = styled.a `
animation: bounceInLeft;
animation-duration: 2s;
display:flex;
justify-content: space-evenly;
/* border: 1px solid black; */
background-color: #00adb5;
color: #eeeeee;
text-decoration: none;
width: 10%;
margin-top: 1%;
margin-left: 1%;
font-size: 1rem;
padding: .5%;
border-radius: 0px 10px 0px 10px;


`
const NavLinks2 =styled.a `
animation: bounceInUp;
animation-duration: 2s;
display:flex;
justify-content: space-evenly;
/* border: 1px solid black; */
background-color: #00adb5;
color: #eeeeee;
text-decoration: none;
width: 10%;
margin-top: 1%;
margin-left: 1%;
font-size: 1rem;
padding: .5%;
border-radius: 0px 10px 0px 10px;

`
const NavLinks3 =styled.a `
animation: bounceInDown;
animation-duration: 2s;
display:flex;
justify-content: space-evenly;
/* border: 1px solid black; */
background-color: #00adb5;
color: #eeeeee;
text-decoration: none;
width: 10%;
margin-top: 1%;
margin-left: 1%;
font-size: 1rem;
padding: .5%;
border-radius: 0px 10px 0px 10px;

`
const NavLinks4 =styled.a `
animation: bounceInRight;
animation-duration: 2s;
display:flex;
justify-content: space-evenly;
/* border: 1px solid black; */
background-color: #00adb5;
color: #eeeeee;
text-decoration: none;
width: 10%;
margin-top: 1%;
margin-left: 1%;
font-size: 1rem;
padding: .5%;
border-radius: 0px 10px 0px 10px;

`
const HeaderStyled = styled.h1 `
display: flex;
justify-content: center;
margin-top: 1%;
margin-bottom: 1%;
font-size: 4rem;
`