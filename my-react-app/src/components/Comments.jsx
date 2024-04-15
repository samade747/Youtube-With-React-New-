import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;  
    gap: 10px;
    margin: 30px 0px;

`;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
     
`




const Comments = () => {

    return (
        <Container>
            <NewComment>

                <Avatar src="../img/avatar.png" />  
                <Input placeholder="Add a comment..." />

            </NewComment>           
        </Container>
    )
}

export default Comments

// 5559