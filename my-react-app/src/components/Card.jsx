import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
  width: 360px;
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 80px;
  cursor: pointer;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex; 
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`
const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  background-color: #999;
  border-radius: 50%;  
`;


const Texts = styled.div`

`;

const Title = styled.h1`  
    font-size: 16px; 
    font-weight: 500;
    color: ${( { theme } ) => theme.text};
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${( { theme } ) => theme.textSoft};
margin: 10px 0px;
`;


const Info = styled.h2`
  font-size: 14px;
  color: ${( { theme } ) => theme.textSoft};

`;


const Card = () => {
    return (
   <Link to="/video/test" style={{ textDecoration: "none"}}>
    <Container>
      <Image src="../img/avatar.png" />       
         <Details>
            <ChannelImage src="../img/avatar.png" /> 
            <Texts>
              <Title>Samad live Video</Title>
              <ChannelName>samad Test channel</ChannelName>
              <Info>65898,744 views • 3 days ago </Info>
            </Texts>
          </Details>       
       </Container>
   </Link>      
    // 37:08
    );
};

export default Card 