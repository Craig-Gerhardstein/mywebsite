import React from 'react';
import styled from 'styled-components';

export default function Main (props) {
    return (
        <Content>
            <h2>Introduction</h2>
            <p>
                Logical and results-driven Web Developer dedicated to building and
                optimizing user-focused websites for customers with various business
                objectives. Judicious and creative when crafting effective websites, apps
                and platforms to propel competitive advantage and revenue growth.
                Technically proficient and analytical problem solver with calm and
                focused demeanor.
            </p>
           
        </Content>
                
           
            
    )

}

const Content = styled.div `
/* border: 1px solid black; */
width:50%;
margin-left:26%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
text-align: center;
h2{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 30px;

}
p{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: auto;
    text-align: center;
    width: 70%;


`