import React from 'react';
import styled from 'styled-components'

export default function Footer ( props )  {


    return(
        <StyledFooter>
            <a href="https://www.facebook.com/craig.gerhardstein/" class="fa fa-facebook"> </a>
            <a href="https://github.com/Craig-Gerhardstein" class="fa fa-github"> </a>
            <a href="https://www.linkedin.com/in/craig-gerhardstein/" class="fa fa-linkedin"> </a>
            <a href="https://twitter.com/Kickphat" class ="fa fa-twitter"> </a>
            < a href="https://www.instagram.com/craiggerhardstein/" class="fa fa-instagram"> </a>
        </StyledFooter>
    )
 }

 const StyledFooter = styled.div `
 background-color: #393e46;
 display:flex;
 justify-content: center;
 margin-top: 1%;
 position: absolute;
 bottom: 0;
 width: 100%;
 height: 2.5rem;
 display:flex;
 justify-content: space-evenly;
 
 .fa {
    color: white;
    text-decoration: none;
    display:flex;
    justify-content: space-evenly;
    margin-top: 1%;
    margin-bottom: 1%;
    

}
 `