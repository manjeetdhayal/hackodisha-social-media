import React from 'react'; 
import styled from "styled-components"; 
export const Card = styled.div`
width: 200px; 
height: 200px;
background-color:#18191A;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.29);
display: flex; 
align-items: center; 
justify-content: center;
text-align: center;
margin: 10px 90px; 

@media screen and (max-width: 1368 px) {
    width: 175px; 
    height: 200px;      
}

`; 
export default Card; 