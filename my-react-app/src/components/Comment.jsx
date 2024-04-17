 import React from "react";
 import styled from "styled-components";

 const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
 
 `

 const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
 `

 const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
 `

 const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
 `

 const Text = styled.span`
    font-size: 14px;
    color: ${({theme}) => theme.text};
    

 `


 const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

 `
 const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
 `
 const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;

 `

 const Comment = () => {

    return (
        <Container>
            <Avatar src="../img/avatar.png" />
         <Details>
            <Name>
                Samad
            </Name>
            <Date>
                1 day ago
            </Date>
            <Text>
                Test Comment
            </Text>         
         </Details>   
            
        </Container>
    )
 }

 export default Comment